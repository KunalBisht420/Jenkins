import React from 'react'
import { connect } from 'react-redux';
import BotsList from './botsList';

const bots = ({ bots }) => {
    return (
        <div>
            {bots.map((bot) => (
                <BotsList key={bot.id} botData = {bot} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        bots: state.bots.bots
    }
}

export default connect(mapStateToProps)(bots)