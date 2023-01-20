import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import Schema from '../../validators';
import './style.scss'
import api from '../../services/axios';

const FormContainer = ({setValues}) => {

    const { register, handleSubmit, reset, formState:{errors} } = useForm({
        resolver: yupResolver(Schema)
    })

    const registerData = async(data) => {
        let d = data.days
        d === ''?
            d= [1, 15, 30, 60, 90] 
        :
            d = d.split(',')
            d = d.map(i => parseInt(i))
            data.days = d
        
        await api.post('/', data).then(res => setValues(res.data));
        reset()
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
                    <input id='installments' type='number' placeholder='Ex: 3' {...register('installments')} ></input>
                    <p className='err'>{errors.installments?.message}</p>
                </label>

                <label htmlFor='mdr'>
                    Informe o percentual MDR *
                    <input id='mdr' type='text' placeholder='Ex: 1.43' {...register('mdr')}></input>
                    <p className='err'>{errors.mdr?.message}</p>
                </label>

                
                <label htmlFor='days'>
                    Em quantos dias deseja receber
                    <input id='days' type='array' placeholder='Ex: 1, 10, 20 ...' {...register('days')}></input>
                    <p className='message'>Para simular mais de um prazo, separe-os com  "," </p>
                    <p className='err'>{errors.mdr?.message}</p>
                </label>
                <button>Calcular</button>
                </form>
        </section>
    )
}

export default FormContainer