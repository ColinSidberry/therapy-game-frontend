import React, { useState } from "react";
import { Button } from "reactstrap";

function TherapyGame({formData}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <h3>Difficulty</h3>
                    {/* FIXME: Center button in col? */}
                    <Button className="mt-2" style={{ "display": "block" }}>1</Button>
                    <Button className="mt-2" style={{ "display": "block" }}>2</Button>
                    <Button className="mt-2" style={{ "display": "block" }}>3</Button>
                </div>
                {/* <div className="col-6">center</div> */}
                <div class="col-6 card">
                    <div class="card-body">
                        <h5 class="card-title">Diff 0</h5>
                        <p class="card-text">Question to be pulled on button click.</p>
                    </div>
                </div>
                <div className="col-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{formData.partner1}</h5>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{formData.partner2}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row"></div>
        </div>
    );
}

export default TherapyGame;