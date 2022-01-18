import React, { useState } from "react";
import { Button, Card, CardBody, CardTitle } from "reactstrap";
import TherapyGame from "./TherapyGame";

/** Form for editing names.
 *
 * State:
 * - formData: { firstName, lastName }
 */
function StartForm() {
    const INITIAL_DATA = {
        partner1: "",
        partner2: "",
    }
    const [formData, setFormData] = useState(INITIAL_DATA);

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log("Check out state ->", formData);
        <TherapyGame formData = {formData}/> // launches main game
        setFormData(INITIAL_DATA);
    }

    return (
        <Card>
            <CardBody className="m-5">
                <form onSubmit={handleSubmit}>
                    <h3>Please input your names:</h3>
                    <CardTitle>
                        <label htmlFor="partner1" className="mt-3">Partner 1</label>
                    </CardTitle>
                    <input
                        id="partner1"
                        name="partner1"
                        value={formData.partner1}
                        onChange={handleChange}
                        placeholder="Add name here"
                    />

                    <CardTitle>
                        <label htmlFor="partner2" className="mt-3">Partner 2</label>
                    </CardTitle>
                    <input
                        id="partner2"
                        name="partner2"
                        value={formData.partner2}
                        onChange={handleChange}
                        placeholder="Add name here"
                    />
                    <Button className="mt-3" style={{ "display": "block" }}>
                        Start Game
                    </Button>
                </form>
            </CardBody>
        </Card >
    );
}

export default StartForm;