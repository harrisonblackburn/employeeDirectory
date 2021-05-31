import React from "react";
import Hero from "./components/Hero";
import API from "./utils/API";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from './components/Wrapper';

class Employee extends Component {
    state = {
        employees: [],

    };


    componentDidMount() {
        this.populateTable()
    };

    populateTable = () => {
        API.populate()
            .then(res =>
                console.log(res),
                this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Wrapper>
                <Hero backgroundImage="https://acavideoremoteinterpreting.com/wp-content/uploads/2018/12/deaf-employee-video-remote-asl.jpg">
                    <h1>Employee Directory</h1>
                </Hero>
                {this.state.employees.map(employee => (
                    <EmployeeCard
                        id={employee.id}
                        key={employee.id}
                        name={employee.name.first}
                        image={employee.image}
                        email={employee.email}
                        phone={employee.phone}
                        dob={employee.dob.date}
                    />
                ))}
            </Wrapper>
        )
    }
}

export default Employee