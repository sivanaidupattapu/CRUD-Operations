import React, { useEffect } from "react";
import { useGetAllCountriesQuery } from "../../services/countriesAPI";
import { useDispatch, useSelector } from "react-redux";
import { updateCountries } from "./countriesslice";
function Countries() {
    var { isLoading, data } = useGetAllCountriesQuery()
    let countries = useSelector(state => state.countriesReducer.countries)
    let dispatch = useDispatch()
    useEffect(()=>{
        if(isLoading===false){
            dispatch(updateCountries(data))
        }
    },[isLoading])
    console.log('countries : ',countries)
    console.log('isLoading :', isLoading)
    console.log('data :', data)
    return <div className="border border-2 border-danger m-1">
        <h1 className="text-success text-center">Countries Component</h1>
        {isLoading &&
            <button class="btn btn-danger" type="button" disabled>
                <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span role="status">Loading...</span>
            </button>
        }
        <ul>
            {isLoading === false && (
                countries?.map((c,i) => {
                    return <div>
                        {/* <img src={c.flags[1]} alt="" width='100px' /> */}
                        <li key={i}>{c.name.common}</li>
                    </div>
                })
            )}
        </ul>
    </div>
}
export default Countries