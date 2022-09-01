/**
 * Ejemplo de componente de tipo clase que dispone
 *  de los metodos de ciclo de vida
 *  */

import React, { Component } from 'react';


class lifeCycleExample extends Component {
    constructor(props) {
        super(props);
console.log('CONSTRUCTOR :cuando se instancia el componente')
    }

    componentWillMount() {
        console.log('WILLMOUNT :antes del montaje del componente')
    }

    componentDidMount() {
        console.log('DIDMOUNT : justo al acabar el montaje del componente, antes de renderizarlo')
    }

    componentWillReceiveProps(nextProps) {
        console.log('WILLRECEIVEPROPS : si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState) {
        /*controlar si el componente debe o no actualizarse */
 //return true /false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WILLUPDATE : justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DIDUPDATE : justo despues de actualizarse')
    }

    componentWillUnmount() {
        console.log('WILLUNMOUNT : justo antes de desaparaecer')
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

lifeCycleExample.propTypes = {

};

export default lifeCycleExample;