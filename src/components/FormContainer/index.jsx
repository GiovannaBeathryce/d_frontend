import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import Schema from '../../validators';
import './style.scss'

const FormContainer = () => {

    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(Schema)
    })

    const registerData = (data) => {
        console.log(data);
    }

    return(
        <section className='req'>
            <h1>Simule sua Antecipação</h1>
            <form onSubmit={handleSubmit(registerData)}>
                <label htmlFor='amount'>
                    Informe o valor da sua venda *
                    <input id='amount' type='text' placeholder='Ex: 1500.0'{...register('amount')}></input>
                    <p className='err'>{errors.amount?.message}</p>
                </label>

                <label htmlFor='installments'>
                    Em quantas parcelas *
                    <input id='installments' type='number' {...register('installments')} ></input>
                    <p className='err'>{errors.installments?.message}</p>
                </label>

                <label htmlFor='mdr'>
                    Informe o percentual MDR *
                    <input id='mdr' type='text' {...register('mdr')}></input>
                    <p className='err'>{errors.mdr?.message}</p>
                </label>
                
                <button>Calcular</button>
                </form>
        </section>
    )
}

export default FormContainer