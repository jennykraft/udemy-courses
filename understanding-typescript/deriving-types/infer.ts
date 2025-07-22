function add(a: number, b: number) {
    return a + b;
}

type AddFn = typeof add;
type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : never; // extracts the return value type of add function

type AddFnReturnValueType = ReturnValueType<AddFn>; // return type is number

// but there is a prebuilt utility type provided by typescript for that