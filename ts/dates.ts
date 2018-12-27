/**
 * Returns a DateRange containing the range of overlap of ranges passed in
 * Or throws an exception if there's no overlap
 */
const findOverlap = (dateRange1: DateRange, dateRange2: DateRange): DateRange => {
    // TODO: Implement
    return { begin: new Date(), end: new Date() };
}

interface DateRange {
    begin: Date;
    end: Date;
}

export { findOverlap };