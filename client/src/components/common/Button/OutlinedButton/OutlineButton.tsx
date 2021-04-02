import React from "react";
import {
  Box,
  Button,
  ButtonProps,
  CircularProgress,
  useTheme,
} from "@material-ui/core";
import { Palette, PaletteColor } from "@material-ui/core/styles/createPalette";
import clsx from "clsx";
import useButtonStyles from "../button-styles";
import { hexToRgba } from "../../../../helpers";

interface OutlinedButtonProps extends ButtonProps {
  isSubmitting?: boolean;
}

const OutlinedButton: React.FC<OutlinedButtonProps> = ({
  isSubmitting,
  ...props
}: OutlinedButtonProps) => {
  const theme = useTheme();

  const stylesProps = {
    focusBackgroundColor: theme.palette.action.hover,
  };

  if (props.color && props.color !== "inherit") {
    stylesProps.focusBackgroundColor = hexToRgba(
      (theme.palette[props.color as keyof Palette] as PaletteColor).main,
      theme.palette.action.hoverOpacity
    );
  }

  const classes = useButtonStyles(stylesProps);

  return (
    <Box
      position="relative"
      display="inline-flex"
      width={props.fullWidth && "100%"}
    >
      {isSubmitting && (
        <Box className={classes.circularProgress}>
          <CircularProgress size={25} />
        </Box>
      )}
      <Box position="inherit" display="inherit" width="inherit">
        <Button
          {...props}
          variant="outlined"
          color={props.color}
          focusVisibleClassName={classes.focusVisible}
          className={clsx(classes.buttonActive, props.className)}
        />
      </Box>
    </Box>
  );
};

export default OutlinedButton;