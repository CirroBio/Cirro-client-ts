import { Box, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { DownloadableFile, FILE_IMAGE_EXTENSIONS, matchesExtension } from "@cirrobio/sdk";
import { useWindowSize } from "@cirrobio/react-core";
import { useViewerServices, useViewerState } from "@cirrobio/react-tool";

interface ViewerState {
  asset: DownloadableFile | null;
  url: string | null;
}

export function Viewer() {
  // Grab the selectedFile and files from the viewer state
  const { selectedFile, files } = useViewerState();
  // Grab an instance of the fileService from the viewer services to fetch signed URLs
  const { fileService } = useViewerServices();

  const viewSize = useWindowSize();

  // State to hold the current asset and its signed URL
  const [state, setState] = useState<ViewerState>({ asset: null, url: null });

  // Filter out images from the available files, sort by name
  const images = useMemo(() => {
    return files
      .filter((file) => matchesExtension(file.name, FILE_IMAGE_EXTENSIONS))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [files]);

  // Find selected file in the available files,
  //   or select the first image if no file is selected
  const asset: DownloadableFile = useMemo(() => {
    const matchedFile = images.find(f => f.url === selectedFile);
    return matchedFile ?? images[0];
  }, [selectedFile, images]);

  // Get the signed URL for the selected asset when it changes
  useEffect(() => {
    (async () => {
      if (!asset) return;
      setState({ asset, url: await fileService.getSignedUrlFromProjectFile(asset) });
    })();
  }, [asset, fileService]);

  // Detect if there are no files to display
  if (!images?.length) {
    return <Typography variant="body2">No Files</Typography>
  }

  // Render the viewer with the selected image
  return (
    <div style={{
      marginLeft: 0, paddingLeft: 0,
      height: "100vh", width: viewSize.width, display: 'flex', flexDirection: 'column',
    }}>
      <Box sx={{
        height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2,
      }}>
        <Tooltip title={state.asset?.name}>
          <img alt={state.asset?.name} src={state.url} style={{ maxHeight: '100%', maxWidth: '90%' }} />
        </Tooltip>
      </Box>
    </div>
  );
}
