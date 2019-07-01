export interface TypeGuard {
    type: string;
    check: (object: any) => boolean;
}
export declare const StringGuard: TypeGuard;
export declare const NumberGuard: TypeGuard;
export declare const BooleanGuard: TypeGuard;
export declare const NullGuard: TypeGuard;
export declare const StringArrayGuard: TypeGuard;
export declare const NumberArrayGuard: TypeGuard;
export declare const BooleanArrayGuard: TypeGuard;
export declare const NullArrayGuard: TypeGuard;
export declare const StringMapGuard: TypeGuard;
export declare const NumberMapGuard: TypeGuard;
export declare const BooleanMapGuard: TypeGuard;
export declare const NullMapGuard: TypeGuard;
