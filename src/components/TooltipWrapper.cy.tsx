import React from 'react';
import TooltipWrapper from './TooltipWrapper';
import { Button } from '@mui/material';
import { mount } from 'cypress/react';
describe('<TooltipWrapper />', () => {
  it('renders children without tooltip when no tooltip prop provided', () => {
    mount(
      <TooltipWrapper>
        <Button data-testid="test-button">Test Button</Button>
      </TooltipWrapper>
    );

    cy.get('[data-testid="test-button"]').should('exist');
    // Should not render help icon when no tooltip
    cy.get('button[aria-label*="Help:"]').should('not.exist');
  });

  it('handles empty string tooltip as no tooltip', () => {
    mount(
      <TooltipWrapper tooltip="">
        <Button data-testid="test-button">Test Button</Button>
      </TooltipWrapper>
    );

    cy.get('[data-testid="test-button"]').should('exist');
    // Should not render help icon when tooltip is empty string
    cy.get('button[aria-label*="Help:"]').should('not.exist');
  });

  it('renders with question mark icon when tooltip is provided', () => {
    mount(
      <TooltipWrapper tooltip="Help text for icon">
        <Button data-testid="test-button">Test Button</Button>
      </TooltipWrapper>
    );

    cy.get('[data-testid="test-button"]').should('exist');

    // Check that HelpOutlineIcon is rendered
    cy.get('[data-testid="HelpOutlineIcon"]').should('exist');

    // Check the icon button has proper aria-label
    cy.get('button[aria-label*="Help:"]').should('exist');
  });

  it('shows tooltip when hovering over question mark icon', () => {
    const tooltipText = 'This is help text for the icon';

    mount(
      <TooltipWrapper tooltip={tooltipText}>
        <Button data-testid="test-button">Test Button</Button>
      </TooltipWrapper>
    );

    // Hover over the help icon
    cy.get('button[aria-label*="Help:"]').trigger('mouseover');
    cy.wait(600);

    // Check tooltip is visible and contains correct text
    cy.get('[role="tooltip"]').should('be.visible').and('contain.text', tooltipText);
  });

  it('positions icon at end by default', () => {
    mount(
      <TooltipWrapper tooltip="Help text">
        <span data-testid="test-content">Content</span>
      </TooltipWrapper>
    );

    // Check the layout: content should come first, then icon
    cy.get('[data-testid="test-content"]').should('exist');
    cy.get('button[aria-label*="Help:"]').should('exist');

    // The icon should be positioned after the content (end position)
    cy.get('[data-testid="test-content"]').next().should('contain.html', 'HelpOutlineIcon');
  });

  it('follows WCAG accessibility guidelines', () => {
    const tooltipText = 'Accessible help information';

    mount(
      <TooltipWrapper tooltip={tooltipText}>
        <Button data-testid="test-button">Main Button</Button>
      </TooltipWrapper>
    );

    // Check IconButton has proper ARIA attributes
    cy.get('button[aria-label*="Help:"]')
      .should('have.attr', 'aria-label')
      .and('include', tooltipText);

    // Test keyboard accessibility - focus should work
    cy.get('button[aria-label*="Help:"]').focus();
    cy.wait(600);

    // Tooltip should be visible on keyboard focus
    cy.get('[role="tooltip"]').should('be.visible');
  });

  it('handles no tooltip gracefully', () => {
    mount(
      <TooltipWrapper>
        <Button data-testid="test-button">Test Button</Button>
      </TooltipWrapper>
    );

    // Should render children without icon when no tooltip
    cy.get('[data-testid="test-button"]').should('exist');
    cy.get('button[aria-label*="Help:"]').should('not.exist');
    cy.get('[data-testid="HelpOutlineIcon"]').should('not.exist');
  });
});
