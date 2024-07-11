import { CSSProperties, HTMLAttributes, MouseEvent } from 'react';

export interface ISvgProps extends HTMLAttributes<SVGElement> {
  width?: string;
  height?: string;
  fill?: string;
  secondFill?: string;
  style?: CSSProperties;
  type?: 'origin' | 'alternative';
  stroke?: string;
  className?: string;
  onClick?: (e: MouseEvent<SVGElement>) => void;
}
