import React from 'react'

import './App.scss'

import axios from 'axios'



class App extends React.Component {

  constructor() {
    super()

    this.state = {
      data: null,
      job: null,
      
    }

    // this.mapStuff = this.mapStuff.bind(this)
  }


  componentDidMount() {
    axios.get('/data.json')
    .then(res => this.setState({ data: res.data }))
    .catch(err => console.log(err))
  }


  mapStuff(i) {
    // const NewItem = this.state.data.map((_dat, id) => (
      

    //     <div key={id}>{_dat.languages}</div>
      
    // ))

      
    let languages = document.querySelectorAll('.languages')
      // for(i = 0; i < NewItem.length; i++){
      //   languages.style.backgroundColor = 'red'
      // }

      console.log(languages)

      // NewItem.forEach(element => console.log('hello'))

    
  }

   

  render () {
    console.log(this.state.data)
    // console.log(this.state.languages)
    if(!this.state.data) return null

    return (

      <>
        <section className="header">
          
        </section>
        <section className="job-space">

          <div>
            {
              this.state.data.map((_dat, id) => (
                <>
                  <div className="display-job-card">

                  <div className="card-left">
                    <div className="job-display-image">
                        <img src={_dat.logo} alt={_dat.company}/>
                    </div>

                    <div className="card-middle">
                      
                      <div className="job-display-body">
                        <p className="title">{_dat.company}</p>
                        <p className="isNew">{_dat.new}</p>
                        <p className="isFeatured">{_dat.featured}</p>
                        <h3>{_dat.position}</h3>
                      </div>
                      <div className="time-location">
                          <p>{_dat.postedAt} &nbsp;</p>
                          <p>- {_dat.contract} &nbsp;</p>
                          <p>- {_dat.location} &nbsp;</p>
                          </div>
                    </div>

                  </div>

                  
                    <div className="tools-id" key={id}>
                        <p>{_dat.role}</p>
                        <p>{_dat.level}</p>
                        <p className="languages">{_dat.languages}</p>
                        <p>{_dat.tools}</p>
                      </div>

                    </div>
                </>
              ))
            }
          </div>
        
        </section>
      </>
    )
  }

}


export default App
