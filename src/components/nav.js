import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Nav = ({counts})=> {
    return (
        <nav className="navbar navbar-light d-flex flex-nowrap bg-light justify-content-between">
            <Link to="/dashboard">
                <h3 className="m-4 nav-link">Dashboard</h3>
            </Link>
            <Link to="/cart">
                <h3 className="m-4 nav-link">Cart-{counts}</h3>
            </Link>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        counts: state.counts
    }
}

export default connect(mapStateToProps)(Nav)
