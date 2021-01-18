import { differenceInCalendarDays, format } from 'date-fns';
import React, { useState } from 'react';
import './modal.css';

interface modalProps  {
    currentDate:Date;
    handleSubmit(e:React.FormEvent<HTMLFormElement>):void;
    close():void;
    isOpened:boolean;
    modalState:string;
}

export default function Modal(props:modalProps){
    const [startDate,setStartDate] = useState(format(new Date(props.currentDate), 'yyyy-MM-dd'));
    const [endDate,setEndDate] = useState(format(new Date(props.currentDate), 'yyyy-MM-dd'));
    const [sumOfDays,setSumOfDays] = useState(0);
    if(props.isOpened){
        if(props.modalState==='normal'){
            return(
                <div className='modalWrapper' onClick={props.close}>
                    <div className="modal" onClick={(e)=>{e.stopPropagation();}}>
                    <div className="modal__header">
                            <p className='header__title'>Vacation request</p>
                            <p className='header__text'>{sumOfDays<0?'0 Days':sumOfDays===1?sumOfDays+' Day':sumOfDays+' Days'} </p>
                        </div>
                        <div className="modal__body">
                        <form onSubmit={(e)=>{props.handleSubmit(e)}}>
                            <div className="dates-block">
                            <p className='dates-block__header title'>Dates</p>
                                <div className="modal__dates">
                                <label>
                                    <p className="dates__title">From</p>
                                    <input className='title dates__input' type="date" name='startDate' min={format(new Date(props.currentDate), 'yyyy-MM-dd')} required onChange={(e)=>{
                                        setStartDate(format(new Date(e.target.value), 'yyyy-MM-dd'));
                                        setSumOfDays(differenceInCalendarDays(new Date(endDate),new Date(e.target.value))+1);
                                        //console.log(e.target.parentElement?.parentElement?.parentElement?.parentElement?.firstChild?.lastChild?.textContent , differenceInCalendarDays(new Date((e.target.parentElement?.nextSibling?.lastChild as HTMLInputElement).value),new Date(e.target.value)))
                                    }
                                        }/>
                                </label>
                                <label>
                                    <p className="dates__title">To</p>
                                    <input  className='title dates__input' type="date"  name='endDate' min={startDate} required onChange={
                                        (e)=>{
                                            setEndDate(format(new Date(e.target.value), 'yyyy-MM-dd'));
                                            setSumOfDays(differenceInCalendarDays(new Date(e.target.value) ,new Date(startDate))+1)
                                        }
                                    }/>
                                </label>
                                </div>
                            </div>
                            <div className="vacation-form-type">
                            <p className='vacation-form-type__header title'>Vac Type</p>
                            <select className='vacation-form-type__input' name='vacType'>
                                <option value="PD">Paid Day Off (PD)</option>
                                <option value="uPD">Unpaid Day Off (UPD)</option>
                            </select>
                            </div>
                            
                            <hr/>
                            <div className="btn-block">
                                <button className='btn-block__btn btn-block__btn_close' onClick={props.close}>Cancel</button>
                                <input className='btn-block__btn btn-block__btn_submit' type="submit" value="Send"/>
                            </div>
                        </form>
                            </div>
                    
                    </div>
                </div>
            )
        }else if(props.modalState==='loading'){
            return(
                <div className='modalWrapper' onClick={props.close}>
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            )
        }else if(props.modalState==='error'){
            return(<div className='modalWrapper' onClick={props.close}>
                    <div className="modal" onClick={(e)=>{e.stopPropagation();}}>
                        <div className="modal__header modal__header_red">
                            <p className='header__title'>Error</p>
                            <p className='header__text'>404</p>
                        </div>
                        <div className="modal__body">
                            <div className="error-block">
                            <i className="fa fa-exclamation-circle fa-5x" aria-hidden="true"></i>
                            <p className='error-block__text'>Oops! An error occured!</p>
                            <p className='error-block__error-text'>Error text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, commodi?</p>
                            <div className="btn-block">
                                <button className='btn-block__btn btn-block__btn_close btn-block__btn_middle' onClick={props.close}>Ok</button>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                )
        }else{
            return null
        }
        }else{
        return null
    }
}