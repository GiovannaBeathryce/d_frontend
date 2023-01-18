import './style.scss'

const ResponseContainer = () => {
    return(
        <section className='res'>
            <h3>VOCÊ RECEBERÁ:</h3>
            <div className='separator_bar'></div>
            <div className='dates'>
                <p>Amanhã:
                    <span> R$ </span>
                </p>
                <p>Em 15 dias: 
                    <span> R$ </span>
                </p>
                <p>Em 30 dias: 
                    <span> R$ </span>
                </p>
                <p>Em 90 dias: 
                    <span> R$ </span>
                </p>
            </div>    
        </section>
    )
}

export default ResponseContainer