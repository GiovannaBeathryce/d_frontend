import { useForm } from 'react-hook-form'
import './style.scss'

const FormContainer = () => {

    const { register, handleSubmit} = useForm()

    return(
        <section className='req'>
            <h1>Simule sua Antecipação</h1>
            <form>
                <label>
                    Informe o valor da sua venda *
                    <input type='text'{...register('amount')}></input>
                </label>
                <label>
                    Em quantas parcelas *
                    <input type='text' {...register('installments')} ></input>
                <span>máximo de 12 parcelas</span>
                </label>
                <label>
                    Informe o percentual MDR *
                    <input type='text' {...register('mdr')}></input>
                </label>
                
                <button>Calcular</button>
                </form>
        </section>
    )
}

export default FormContainer