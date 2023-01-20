import * as yup from "yup";

const Schema = yup.object({
    amount: yup.number().min(1000, 'O valor mínimo é de R$ 1000.00').typeError('Digite um valor válido. Ex: 1500.00').required('Este campo é obrigatório'),
    installments: yup.number().typeError('Este campo é obrigatório').integer().min(1, 'Digite um valor de 1 a 12').max(12, 'Digite um valor de 1 a 12').positive('Digite um valor de 1 a 12').required('Este campo é obrigatório'),
    mdr: yup.number().typeError('Este campo é obrigatório').min(0.1, 'Digite um valor maior ou igual a 0.1').positive('Deve ser um valor positivo').required('Este campo é obrigatório'),
    days: yup.string().nullable()
})


export default Schema