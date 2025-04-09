export interface Dimensions {
  /** Length of the package. */
  length: number;
  /** Width of the package. */
  width: number;
  /** Height of the package. */
  height: number;
  /** Units of measurement. */
  units: 'inches' | 'centimeters';
}
