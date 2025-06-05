import { Box, Tooltip } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { DownloadableFile, FILE_IMAGE_EXTENSIONS, matchesExtension } from "@cirrobio/sdk";
import { useWindowSize } from "@cirrobio/react-ui-core";
import { useViewerServices, useViewerState } from "@cirrobio/react-tool";

interface ViewerState {
  asset: DownloadableFile | null;
  url: string | null;
}

export function Viewer() {
  const { selectedFile, files } = useViewerState();
  const { fileService } = useViewerServices();

  const viewSize = useWindowSize();

  const [state, setState] = useState<ViewerState>({ asset: null, url: null });

  // Filter and sort images from the files
  const images = useMemo(() => {
    return files
      .filter((file) => matchesExtension(file.name, FILE_IMAGE_EXTENSIONS))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [files]);

  // Find selected file or select the first image
  const asset: DownloadableFile = useMemo(() => {
    const matchedFile = images.find(f => f.url === selectedFile);
    return matchedFile ?? images[0];
  }, [selectedFile, images]);

  useEffect(() => {
    (async () => {
      if (!asset) return;
      setState({ asset, url: await fileService.getSignedUrlFromProjectFile(asset) });
    })();
  }, [asset, fileService]);

  if (state.url === null) { return null; }
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
