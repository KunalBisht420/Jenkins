import React from 'react'
import { connect } from 'react-redux'
import { viewAlgo, increaseCount, decreaseCount, addItem, remItem } from '../index'
import { Link } from 'react-router-dom'

const botsList = ({ botData, viewAlgo,  increaseCount, decreaseCount, addItem, remItem }) => {

    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">{botData.bot}</h5>
            </div>
            <div className="card-body d-inline-flex justify-content-between">
                <div className="d-inline-flex">
                    <div className="m-3">
                        <p>Index value</p>
                        <p>{botData.index}</p>
                    </div>
                    <div className="m-3">
                        <p>CAGR</p>
                        <p className="text-success">{botData.cagr}%</p>
                    </div>
                </div>
                <div className="d-flex flex-column bd-highlight mb-3">
                    <Link to={`/bots/${botData.id}`}>
                        <button onClick={() => viewAlgo(botData)} className="m-2 btn p-2 bd-highlight btn-primary">View Algo</button>
                    </Link>
                    {botData.itemCount ? <div><button onClick={() => { decreaseCount(); remItem(botData) }} className="m-2 btn p-2 bd-highlight btn-primary">-</button>
                        {botData.itemCount}<button onClick={() => { increaseCount(); addItem(botData) }} className="m-2 btn p-2 bd-highlight btn-primary">+</button></div> :
                        <button onClick={() => { increaseCount(); addItem(botData) }} className="m-2 btn p-2 bd-highlight btn-primary">Buy</button>
                    }
                </div>
            </div>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({

    viewAlgo: (bot) => dispatch(viewAlgo(bot)),
    increaseCount: () => dispatch(increaseCount()),
    decreaseCount: () => dispatch(decreaseCount()),
    addItem: (bot) => dispatch(addItem(bot)),
    remItem: (bot) => dispatch(remItem(bot))
})

const mapStateToProps = state => {
    return {
        counts: state.counts
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(botsList)