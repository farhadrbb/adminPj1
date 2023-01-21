export default function validate(values) {
    let errors = {};
    if (!values.username) {
        errors.username = 'فیلد اجباری';
    }
    if (!values.password) {
        errors.password = 'فیلد اجباری';
    }
    return errors;
};