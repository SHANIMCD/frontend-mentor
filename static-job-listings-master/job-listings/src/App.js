import React from 'react'
import './App.scss'
import axios from 'axios'




class App extends React.Component {



  constructor() {
    super()

    this.state = {
      data: [],
      filters: []

    }
    // this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    axios.get('/data.json')
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err))
  }


  // filteredJobs() {
  //   // const data = this.state
  //   // const re = new RegExp('F')
  //   // const filtered = this.state.data.filter(dat => {
  //   //   return re.test(dat.role)
  //   // })
  //   // console.log(filtered)

  //   let { role, level, tools, languages } = this.state.data
  //   let { filters } = this.state

  //   if (filters.length === 0) {
  //     return true
  //   }

  //   const tags = [role, level]

  //   if (tools) {
  //     tags.push(...tools)
  //   }

  //   if (languages) {
  //     tags.push(...languages)
  //   }

  //   return tags.some(tag => filters.includes(tag))

  // }

  // handleTagClick(tag) {
  //   setFilters([...filters, tag])
  // }

  // filterJobs() {
  //  const filteredRoles = this.state.data.filter(dat => dat.role === 'Backend')
  //  console.log(filteredRoles) 
  // }



  render() {
    // console.log(this.handleClick())
    console.log(this.state.data)
    if (!this.state.data) return null

    return (

      <>
        <section className="header">

        </section>
        <div className="click-filter-container">
          <span className="clicked-input"></span>
        </div>
        <section className="job-space">

          <div>
            {
              this.state.data.map((_dat, id) => (
                <>
                  <div className="display-job-card"

                    style={_dat.featured === true ? { borderLeft: '5px solid hsl(180, 29%, 50%)', borderRadius: '5px' } : { display: 'flex' }}>
                    <div className="card-left">
                      <div className="job-display-image">
                        <img src={_dat.logo} alt={_dat.company} />
                      </div>

                      <div className="card-middle">

                        <div className="job-display-body">
                          <div className="title-boolean">
                            <p className="title">{_dat.company}</p>

                            <p>
                              {_dat.new === true ? <p className="new-button">new!</p> : ''}
                            </p>

                            <p>
                              {_dat.featured === true ? <p className="featured-button">Featured</p> : ''}
                            </p>

                          </div>

                          <h3 className="job-position">{_dat.position}</h3>
                        </div>
                        <div className="time-location">
                          <p>{_dat.postedAt} &nbsp;</p>
                          <p>- {_dat.contract} &nbsp;</p>
                          <p>- {_dat.location} &nbsp;</p>
                        </div>
                      </div>
                    </div>

                    <div name='filtered' className="langtools-id" key={id}>
                      <p onClick={this.filterJobs()} id="job-role">{_dat.role}</p>
                      <p id="job-level">{_dat.level}</p>

                      {_dat.languages ? _dat.languages.map((lang) =>
                        <p>{lang}</p>
                      ) : ''}

                      {_dat.tools ? _dat.tools.map((tool) =>
                        <p >{tool}</p>
                      ) : ''}
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
