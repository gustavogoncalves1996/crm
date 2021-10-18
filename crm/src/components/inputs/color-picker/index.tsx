import React from "react";
import { CirclePicker, ColorResult, SketchPicker } from "react-color";

import { Body, Button } from "./styles";

export enum Types {
  sketch = "sketch",
  circle = "circle",
}

interface Props {
  color: string;
  onChange: (color: ColorResult) => void;
  type?: Types;
}

const ColorPickerComponent: React.FunctionComponent<Props> = ({
  color,
  onChange,
  type = Types.sketch,
}) => {
  const [open, setOpen] = React.useState(false);

  const toggle = React.useCallback((): void => setOpen(!open), [setOpen, open]);
  const close = React.useCallback((): void => setOpen(false), [setOpen]);
  const getPicker = React.useCallback((): React.ReactNode => {
    switch (type) {
      case Types.circle:
        return (
          <CirclePicker
            color={color}
            colors={[
              "#113873",
              "#4584E3",
              "#689BE8",
              "#8CB3EE",
              "#004d40",
              "#00796b",
              "#009688",
              "#79B473",
              "#EFB55A",
              "#ff9800",
              "#ff6000",
              "#D65C6C",
              "#c2185b",
              "#f44336",
              "#bf360c",
              "#455a64",
              "#525252",
              "#7986cb",
            ]}
            onChangeComplete={onChange}
          />
        );
      default:
        return (
          <SketchPicker
            disableAlpha
            color={color}
            onChangeComplete={onChange}
          />
        );
    }
  }, [color, onChange, type]);

  if (type === Types.circle) {
    return <Body>{getPicker()}</Body>;
  }

  return (
    <Body>
      <Button color={color} onClick={toggle} />
      {open && (
        <div
          style={{ position: "absolute", left: 36, top: 0 }}
          onMouseLeave={close}
        >
          {getPicker()}
        </div>
      )}
    </Body>
  );
};

const areEqual = (prevProps: Props, nextProps: Props): boolean =>
  prevProps.onChange === nextProps.onChange &&
  prevProps.color === nextProps.color;

export const ColorPicker = React.memo(ColorPickerComponent, areEqual);
