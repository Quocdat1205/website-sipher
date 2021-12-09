interface IOption {
    clearErrorOnValueChange: boolean;
}
export declare const useFormCore: <IForm extends Record<string, any>>(initialValues: IForm, options?: IOption) => {
    values: IForm;
    setValue: (field: keyof IForm, value: any) => void;
    initForm: (payload?: IForm) => void;
    errors: Record<keyof IForm, string>;
    setError: (field: keyof IForm, value: string) => void;
};
export default useFormCore;
