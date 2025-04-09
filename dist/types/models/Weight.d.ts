export type Unit = 'pounds' | 'ounces' | 'grams';
export interface Weight {
    /** Weight value. */
    value: number;
    /** Unit of weight. */
    units: Unit;
    /**
     * A numeric value that is equivalent to the `units` field.
     * @readonly
     */
    WeightUnits?: number;
}
