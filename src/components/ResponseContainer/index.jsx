import './style.scss'

const ResponseContainer = ({values}) => {
    var days = Object.keys(values)
    var value = Object.values(values)
    let lista = days.map(function(v, i) {
        return {
          day: v,
          value: value[i]
        };
      })
     
    return(
        <section className='res'>
            <h3>VOCÊ RECEBERÁ:</h3>
            <div className='separator_bar'></div>
            <div className='dates'>
                {
                    lista.map((item) => (
                        item.day === '1'?
                        <p key={item.day}>Amanhã: 
                            <span> R$ {item.value},00 </span>
                        </p>
                        :
                        <p key={item.day}>Em {item.day} dias: 
                            <span> R$ {item.value},00 </span>
                        </p>
                    ))
                }
            </div>    
        </section>
    )
}

export default ResponseContainer