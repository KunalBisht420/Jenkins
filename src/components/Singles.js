import React from 'react'
import { connect } from 'react-redux'
import { increaseCount, decreaseCount, addItem, remItem } from '../index'

const Singles = ({ currentBot,decreaseCount, increaseCount, addItem, remItem }) => {
    return (
        <div className="card">
            <h5 className="card-header">{currentBot.bot}</h5>
            <div className="card-body d-flex flex-column bd-highlight mb-3">
                <p className="card-text">{currentBot.description}</p>

                <div className="d-inline-flex justify-content-center">
                    <div className="m-3">
                        <p>Index value</p>
                        <p>{currentBot.index}</p>
                    </div>
                    <div className="m-3">
                        <p>CAGR</p>
                        <p className="text-success">{currentBot.cagr}%</p>
                    </div>
                </div>
                {currentBot.itemCount ? <div><button onClick={() => { decreaseCount(); remItem(currentBot) }} className="m-2 btn p-2 bd-highlight btn-primary">-</button>
                    {currentBot.itemCount}<button onClick={() => { increaseCount(); addItem(currentBot) }} className="m-2 btn p-2 bd-highlight btn-primary">+</button></div> :
                    <button onClick={() => { increaseCount(); addItem(currentBot) }} className="m-2 btn p-2 bd-highlight btn-primary">Buy</button>
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    increaseCount: () => dispatch(increaseCount()),
    decreaseCount: () => dispatch(decreaseCount()),
    addItem: (bot) => dispatch(addItem(bot)),
    remItem: (bot) => dispatch(remItem(bot))
})


const mapStateToProps = state => {
    return {
        currentBot: state.bots.currentBot,
        bots: state.bots.bots
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Singles)