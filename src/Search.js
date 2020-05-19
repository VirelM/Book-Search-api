import React from 'react';
import $ from 'jquery'

export default class Search extends React.Component{
    handleSubmit= (event) =>{
        event.preventDefault();
        let sParam = $('#sParam').val()
        let sParamf = sParam.split(" ").join('%20');
        let printOption = $('#PrintType').val();
        let bookOption = $('#BookType').val();
        this.props.submit(sParamf, printOption, bookOption);
    }
    render(){
        return(
            <form>
                <label htmlFor="searchInput">Search</label>
                <input id="sParam" type="text" placeholder="herny" ></input>
                <button type="submit" onClick={this.handleSubmit}> Search</button><br></br>
                <label htmlFor="PrintType">Print Type:</label>
                <select id="PrintType" name="PrintType" onChange={this.handleSubmit}>
                    <option value="None">No Filter</option>
                    <option value="all">All</option>
                    <option value="books">books</option>
                    <option value="magazines">magazines</option>
                </select>
                <label htmlFor="BookType">Book Type:</label>
                <select id="BookType" name="BookType" onChange={this.handleSubmit}>
                    <option value="None">All</option>
                    <option value="ebooks">ebooks</option>
                    <option value="free-ebooks">free-ebooks</option>
                    <option value="full">full</option>
                    <option value="paid-ebooks">paid-ebooks</option>
                    <option value="partial">partial</option>
                </select>
            </form>
        )
    }
}