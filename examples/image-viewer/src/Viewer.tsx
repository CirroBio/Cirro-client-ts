import { AppBar, Box, Button, Card, CardContent, Chip, Container, Divider, IconButton, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { DownloadableFile, FILE_IMAGE_EXTENSIONS, matchesExtension } from "@cirrobio/sdk";
import { useWindowSize } from "@cirrobio/react-core";
import { useViewerServices, useViewerState } from "@cirrobio/react-tool";
import { DownloadOutlined, InfoOutlined } from '@mui/icons-material';

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
    return (
      <Container>
        <Card>
          <CardContent>
            <Typography variant="h3" color="secondary">No Files Available</Typography>
            <Typography variant="body2" color="text.secondary">Please select a dataset with image files.</Typography>
          </CardContent>
        </Card>
      </Container>
    );
  }

  // Render the viewer with the selected image
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cirro Image Viewer
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip 
              label={`${images.length} Images`} 
              color="primary" 
              variant="filled"
            />
            <Tooltip title="Download Image">
              <IconButton color="inherit" onClick={() => window.open(state.url, '_blank')}>
                <DownloadOutlined />
              </IconButton>
            </Tooltip>
            <Tooltip title="Image Info">
              <IconButton color="inherit">
                <InfoOutlined />
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
      </AppBar>

      <Container sx={{ flexGrow: 1, py: 3 }}>
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h4" color="secondary">
                  {state.asset?.name}
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary"
                  startIcon={<DownloadOutlined />}
                  onClick={() => window.open(state.url, '_blank')}
                >
                  Download
                </Button>
              </Box>
              <Divider />
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                minHeight: '60vh',
                bgcolor: 'background.default',
                borderRadius: 1,
                p: 2
              }}>
                <Tooltip title={state.asset?.name}>
                  <img 
                    alt={state.asset?.name} 
                    src={state.url} 
                    style={{ 
                      maxHeight: '100%', 
                      maxWidth: '100%',
                      objectFit: 'contain'
                    }} 
                  />
                </Tooltip>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
