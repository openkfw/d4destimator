import React from 'react';
import { Tooltip, Box, IconButton } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

interface TooltipWrapperProps {
  tooltip?: string;
  children: React.ReactNode;
}

/**
 * WCAG-compliant tooltip wrapper component with help icon pattern.
 * Displays a question mark icon with accessible tooltip that follows WCAG 2.1 guidelines:
 *
 * - Interactive tooltips (WCAG 1.4.13) - Users can hover and interact with tooltip content
 * - Keyboard accessible - IconButton can be focused and activated with keyboard
 * - Proper ARIA attributes - aria-label provides clear context for screen readers
 * - Sufficient timing - enterDelay/leaveDelay provide adequate time for users with disabilities
 * - Touch accessibility - Enhanced timing for touch devices
 */
const TooltipWrapper: React.FC<TooltipWrapperProps> = ({ tooltip, children }) => {
  if (!tooltip) return <>{children}</>;

  const iconButton = (
    <Tooltip
      title={tooltip}
      arrow
      placement="top-start"
      enterDelay={500}
      leaveDelay={200}
      // WCAG 1.4.13: Interactive tooltips allow users to hover over content
      disableInteractive={false}
      // Enhanced timing for touch accessibility
      enterTouchDelay={700}
      leaveTouchDelay={1500}
    >
      <IconButton
        size="small"
        aria-label={`Help: ${tooltip}`}
        sx={{
          ml: 0.5,
          p: 0.25,
          color: 'text.secondary',
          '&:hover': {
            color: 'primary.main',
          },
          '&:focus-visible': {
            outline: '2px solid',
            outlineColor: 'primary.main',
            outlineOffset: '2px',
          },
        }}
      >
        <HelpOutlineIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );

  return (
    <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center' }}>
      {children}
      {iconButton}
    </Box>
  );
};

export default TooltipWrapper;
