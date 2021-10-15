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
  const getPicker = React.useCallback((): React.ReactNode => {
    switch (type) {
      case Types.circle:
        return <CirclePicker color={color} onChangeComplete={onChange} />;
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

  const toggle = React.useCallback((): void => setOpen(!open), [setOpen, open]);

  if (type === Types.circle) {
    return <Body>{getPicker()}</Body>;
  }

  return (
    <Body>
      <Button color={color} onClick={toggle} />
      {open && (
        <div style={{ position: "absolute", top: 26 }}>{getPicker()}</div>
      )}
    </Body>
  );
};

const areEqual = (prevProps: Props, nextProps: Props): boolean =>
  prevProps.onChange === nextProps.onChange &&
  prevProps.color === nextProps.color;

export const ColorPicker = React.memo(ColorPickerComponent, areEqual);
