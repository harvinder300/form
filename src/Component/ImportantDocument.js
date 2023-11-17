import React from "react";

function ImportantDocuments() {
    return (
        <div className="container-fluid bg-white shadow p-5 my-3">
            <div className="row">
                <div className="col-md-12">
                    <h6 className="text-uppercase text-body font-weight-bold bg-light p-3">
                        <i className="icon-copy mr-2" />
                        Important Documents
                    </h6>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-12">
                    <h6
                        className="font-weight-bold mb-0 "
                        style={{ borderRadius: "4px 4px 0 0" }}
                    >
                        <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />{" "}
                        Identification Proof (Self Attested)
                        <span className="text-muted"> (Anyone in PDF Format)</span>
              
                    </h6>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6 pl-5">
                    <div className="form-group input-select-wrapper has-error">
                        <label
                            className="control-label"
                            htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_idProofType"
                        >
                            ID Proof Type.
                            <span className="reference-mark text-warning" id="kccj__column1__0">
                                
                            </span>
                            <span className="hide-accessible">Required</span>
                        </label>
                        <select
                            className="form-control error-field"
                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_idProofType"
                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_idProofType"
                            aria-required="true"
                            aria-invalid="true"
                            aria-describedby="_BsesConnection_INSTANCE_f962tiSyW2Yr_idProofTypeHelper"
                        >
                            <option value="">-Select-</option>
                            <option value="DL">Driving License</option>
                            <option value="Election">Electoral Identity Card</option>
                            <option value="Aadhaar">Aadhaar Card</option>
                            <option value="Govt Identity Card">
                                Photo Identity Card Issued By Any Govt. Agency
                            </option>
                            <option value="Passport">Passport</option>
                            <option value="PAN">PAN Card</option>
                            <option value="Ration Card">Ration Card having Photograph</option>
                        </select>
                        <div
                            className="form-validator-stack help-block"
                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_idProofTypeHelper"
                        >
                            <div role="alert" className="required">
                                This field is required.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="form-group input-text-wrapper has-error">
                        <label
                            className="control-label"
                            htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_idProofNo"
                        >
                            ID Proof Doc No.
                            <span className="text-warning" id="zyoa__column1__0">
                                <svg
                                    className="lexicon-icon lexicon-icon-asterisk"
                                    focusable="false"
                                    role="presentation"
                                    title="asterisk"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        className="lexicon-icon-outline"
                                        d="M323.6,190l146.7-48.8L512,263.9l-149.2,47.6l93.6,125.2l-104.9,76.3l-96.1-126.4l-93.6,126.4L56.9,435.3l92.3-123.9
	L0,263.8l40.4-122.6L188.4,190v-159h135.3L323.6,190L323.6,190z"
                                    />
                                </svg>
                            </span>
                            <span className="hide-accessible">Required</span>
                        </label>
                        <input
                            className="field form-control error-field"
                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_idProofNo"
                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_idProofNo"
                            type="text"
                            defaultValue=""
                            maxLength={16}
                            aria-required="true"
                            aria-invalid="true"
                            aria-describedby="_BsesConnection_INSTANCE_f962tiSyW2Yr_idProofNoHelper"
                        />
                        <div
                            className="form-validator-stack help-block"
                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_idProofNoHelper"
                        >
                            <div role="alert" className="required">
                                This field is required.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-12">
                    <h6
                        className="font-weight-bold mb-0"
                        style={{ borderRadius: "4px 4px 0 0" }}
                    >
                        <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />{" "}
                        Ownership Proof (Self Attested)
                        <span className="text-muted"> (Anyone in PDF Format)</span>
                        <span className="text-danger">*</span>{" "}
                        <i className="fas fa-info-circle fa-lg text-body" />
                    </h6>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6 pl-5">
                    <div
                        className="form-group input-select-wrapper has-error"
                        id="yui_patched_v3_18_1_1_1700198037410_40585"
                    >
                        <select
                            className="form-control error-field"
                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_ownershipProofType"
                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_ownershipProofType"
                            title="ownership-proof-type"
                            aria-required="true"
                            aria-invalid="true"
                            aria-describedby="_BsesConnection_INSTANCE_f962tiSyW2Yr_ownershipProofTypeHelper"
                        >
                            <option value="">-Select-</option>
                            <option value="Sale Deed">Sale Deed</option>
                            <option value="Conveyance Deed">Conveyance Deed</option>
                            <option value="Allotment Letter">Allotment Letter</option>
                            <option value="Valid Lease agreement">Valid Lease agreement</option>
                            <option value="Mutation certificate issued by Govt">
                                Mutation certificate issued by Govt
                            </option>
                            <option value="GPA (Last 5 Years Chain)">
                                GPA (Last 5 Years Chain)
                            </option>
                        </select>
                        <div
                            className="form-validator-stack help-block"
                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_ownershipProofTypeHelper"
                        >
                            <div role="alert" className="required">
                                This field is required.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2" />
            </div>
            <div className="row mb-3 firm-documents">
                <div className="col-md-12">
                    <h6
                        className="font-weight-bold mb-0"
                        style={{ borderRadius: "4px 4px 0 0" }}
                    >
                        <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />{" "}
                        Firm/Trust/Company/Others Documents (Self Attested)
                        <span className="text-muted" />
                        <span className="text-danger">*</span>
                    </h6>
                </div>
            </div>
            <div className="row mt-3 mb-2 firm-documents">
                <div className="col-md-8">
                    <label className="ml-3">
                        <i className="icon-chevron-right mr-3" />
                        Request on letter head signed by authorized signatory
                    </label>
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row mt-3 mb-2 firm-documents">
                <div className="col-md-8">
                    <label className="ml-3">
                        <i className="icon-chevron-right mr-3" />
                        Certificate of incorporation/ registration issued by the Registrar
                    </label>
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row mt-3 mb-2 firm-documents">
                <div className="col-md-8">
                    <label className="ml-3">
                        <i className="icon-chevron-right mr-3" />
                        Proof of authorization/ resolution of board for authorizing the person
                    </label>
                </div>
                <div className="col-md-4"></div>
            </div>
            <div
                className="row mb-3 evehicle-documents"
                style={{ display: "none" }}
            ></div>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n.checklist-modal\n {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none; \n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n\t}  \n"
                }}
            />
            <form
                action=""
                className="form custom-form "
                data-fm-namespace="_BsesConnection_INSTANCE_f962tiSyW2Yr_"
                id="_BsesConnection_INSTANCE_f962tiSyW2Yr_checklistForm"
                method="post"
                name="_BsesConnection_INSTANCE_f962tiSyW2Yr_checklistForm"
                role="form"
                section-attr="checklist"
            >
                <input
                    className="field form-control"
                    id="_BsesConnection_INSTANCE_f962tiSyW2Yr_formDate"
                    name="_BsesConnection_INSTANCE_f962tiSyW2Yr_formDate"
                    type="hidden"
                    defaultValue={1700198052815}
                />
                <div className="container-fluid bg-white shadow p-5 my-3">
                    <div className="row">
                        <div className="col-md-12">
                            <h6 className="text-uppercase text-body font-weight-bold bg-light p-3">
                                <i className="icon-list mr-2" />
                                Documents Checklist
                            </h6>
                        </div>
                    </div>
                    <div
                        className="form-group row align-items-center"
                        id="elcbdiv"
                        style={{ display: "none" }}
                    >
                        <div className="col-sm-6">
                            <label htmlFor="elcbInstalled" className="col-form-label">
                                <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />
                                <span className="font-weight-bold">ELCB</span>
                                <span>(Earth Leakage Circuit Breaker) installed ?</span>
                                <br />
                                ELCB should be installed at premises where applied load is 2 KW and
                                above.
                            </label>
                            <p id="elcbblink" className="blink">
                                <span>**ELCB shall be verified during inspection.</span>
                            </p>
                        </div>
                        <div className="col-sm-2">
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_elcbInstalled_1">
                                        <input
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_elcbInstalled_1"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_elcbInstalled"
                                            type="radio"
                                            defaultValue={1}
                                        />
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_elcbInstalled_3">
                                        <input
                                            defaultChecked=""
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_elcbInstalled_3"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_elcbInstalled"
                                            type="radio"
                                            defaultValue={0}
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row d-flex align-items-center">
                        <div className="col-sm-6">
                            <label htmlFor="wiringTest" className="col-form-label">
                                <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />
                                <span className="font-weight-bold"> Internal Wiring </span>
                                <span style={{ fontWeight: "normal" }}>
                                    {" "}
                                    at the premises has been tested by a Licensed Electrical
                                    Contractor/designated officer of the Government and the test
                                    Certificate is available with the applicant.{" "}
                                </span>
                            </label>
                            <p id="wiringblink" className="blink font-weight-bold col-form-label">
                                <span>
                                    **Wiring test certificate shall be verified during inspection.
                                </span>
                            </p>
                        </div>
                        <div className="col-sm-2">
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_wiringTest_1">
                                        <input
                                            defaultChecked=""
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_wiringTest_1"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_wiringTest"
                                            type="radio"
                                            defaultValue={1}
                                        />
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_wiringTest_3">
                                        <input
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_wiringTest_3"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_wiringTest"
                                            type="radio"
                                            defaultValue={0}
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="form-group row align-items-center"
                        style={{ marginBottom: "0px !important", display: "none" }}
                        id="stiltparkingdiv"
                    >
                        <label htmlFor="stiltParking" className="col-sm-6 col-form-label">
                            <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />
                            Do you have <span className="font-weight-bold">Stilt Parking?</span>
                        </label>
                        <div className="col-sm-6">
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_stiltParking_1">
                                        <input
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_stiltParking_1"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_stiltParking"
                                            type="radio"
                                            defaultValue={1}
                                        />
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_stiltParking_3">
                                        <input
                                            defaultChecked=""
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_stiltParking_3"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_stiltParking"
                                            type="radio"
                                            defaultValue={0}
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="form-group row align-items-center"
                        style={{ marginBottom: "0px !important", display: "none" }}
                        id="building9div"
                    >
                        <label htmlFor="height9Mtr" className="col-sm-6 col-form-label">
                            <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />
                            Is your building height under 9 meters?
                        </label>
                        <div className="col-sm-6">
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_height9Mtr_1">
                                        <input
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_height9Mtr_1"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_height9Mtr"
                                            type="radio"
                                            defaultValue={1}
                                        />
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_height9Mtr_3">
                                        <input
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_height9Mtr_3"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_height9Mtr"
                                            type="radio"
                                            defaultValue={0}
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="form-group row align-items-center"
                        style={{ marginBottom: "0px !important", display: "none" }}
                        id="building12div"
                    >
                        <label
                            htmlFor="height12Mtr"
                            className="col-sm-6 col-form-label"
                            id="building12domesticlabel"
                        >
                            <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />
                            Is your building height under 12 meters?
                        </label>
                        <div className="col-sm-6">
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_height12Mtr_1">
                                        <input
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_height12Mtr_1"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_height12Mtr"
                                            type="radio"
                                            defaultValue={1}
                                        />
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_height12Mtr_3">
                                        <input
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_height12Mtr_3"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_height12Mtr"
                                            type="radio"
                                            defaultValue={0}
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="form-group row align-items-center"
                        style={{ marginBottom: "0px !important", display: "none" }}
                        id="building15div"
                    >
                        <label
                            htmlFor="height15Mtr"
                            className="col-sm-6 col-form-label"
                            id="building15domesticlabel"
                            style={{ display: "none" }}
                        >
                            <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />
                            Is your building height under 15 meters?
                        </label>
                        <label
                            htmlFor="height15Mtr"
                            className="col-sm-6 col-form-label pl-3"
                            id="building15nondomesticlabel"
                            style={{ display: "none" }}
                        >
                            <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />
                            Is your building height under 15 meters?
                        </label>
                        <div className="col-sm-6">
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_height15Mtr_1">
                                        <input
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_height15Mtr_1"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_height15Mtr"
                                            type="radio"
                                            defaultValue={1}
                                        />
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_height15Mtr_3">
                                        <input
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_height15Mtr_3"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_height15Mtr"
                                            type="radio"
                                            defaultValue={0}
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="form-group row align-items-center"
                        style={{ marginBottom: "0px !important", display: "none" }}
                        id="building17div"
                    >
                        <label
                            htmlFor="height17Mtr"
                            className="col-sm-6 col-form-label pl-3"
                            id="stilt-parking-building-17"
                        >
                            <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />
                            Is your building height under 17.5 meters?
                        </label>
                        <div className="col-sm-6">
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_height17Mtr_1">
                                        <input
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_height17Mtr_1"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_height17Mtr"
                                            type="radio"
                                            defaultValue={1}
                                        />
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_height17Mtr_3">
                                        <input
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_height17Mtr_3"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_height17Mtr"
                                            type="radio"
                                            defaultValue={0}
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="form-group row align-items-center"
                        id="fccdiv"
                        style={{ display: "none" }}
                    >
                        <div className="col-sm-6">
                            <label
                                htmlFor="inputEmail3"
                                className="col-form-label pl-3"
                                style={{ lineHeight: "1 !important" }}
                            >
                                <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />
                                <span>Do you have fire clearance certificate(FCC) ?</span>
                            </label>
                            <p id="fccblink" className="blink pl-5" style={{ display: "none" }}>
                                <span>**FCC shall be verified during inspection.</span>
                            </p>
                        </div>
                        <div className="col-sm-2">
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_fcc">
                                        <input
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_fcc"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_fcc"
                                            type="radio"
                                            defaultValue={1}
                                        />
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_fcc">
                                        <input
                                            defaultChecked=""
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_fcc"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_fcc"
                                            type="radio"
                                            defaultValue={0}
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                            <p />
                        </div>
                    </div>
                    <div
                        className="form-group row d-flex align-items-center"
                        style={{ marginBottom: "0 !important" }}
                    >
                        <div className="col-sm-6">
                            <label htmlFor="liftInstalled" className="col-form-label">
                                <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />
                                Do you have lift installed?
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_liftInstalled_1">
                                        <input
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_liftInstalled_1"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_liftInstalled"
                                            type="radio"
                                            defaultValue={1}
                                        />
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_liftInstalled_3">
                                        <input
                                            defaultChecked=""
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_liftInstalled_3"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_liftInstalled"
                                            type="radio"
                                            defaultValue={0}
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div
                            className="form-group row align-items-center "
                            id="liftDocumentDiv"
                            style={{ display: "none" }}
                        >
                            <div className="col-sm-6">
                                <label htmlFor="inputEmail3" className="col-form-label">
                                    <span>
                                        <span className="font-weight-bold mr-3" />
                                        <i className="icon-chevron-right mr-2" />
                                        <span>Lift</span> is installed in premises and the applicant has
                                        obtained the{" "}
                                        <span className="font-weight-bold">
                                            Lift Fitness Certificate
                                        </span>{" "}
                                        from the Electrical Inspector for the lift in the said premises
                                        and the same is available with the applicant.
                                    </span>
                                </label>
                                <p id="liftblink" className="blink" style={{ display: "none" }}>
                                    <span>
                                        **Lift fitness certificate shall be verified during inspection.
                                    </span>
                                </p>
                            </div>
                            <div className="col-sm-2">
                                <div className="form-check-inline">
                                    <div className="radio">
                                        <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasLiftCertificate">
                                            <input
                                                className="field"
                                                id="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasLiftCertificate"
                                                name="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasLiftCertificate"
                                                type="radio"
                                                defaultValue={1}
                                            />
                                            Yes
                                        </label>
                                    </div>
                                </div>
                                <div className="form-check-inline">
                                    <div className="radio">
                                        <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasLiftCertificate">
                                            <input
                                                defaultChecked=""
                                                className="field"
                                                id="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasLiftCertificate"
                                                name="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasLiftCertificate"
                                                type="radio"
                                                defaultValue={0}
                                            />
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="form-group row align-items-center"
                        id="industrialLicenseDiv"
                        style={{ display: "none" }}
                    >
                        <div className="col-sm-6">
                            <label htmlFor="elcbInstalled" className="col-form-label">
                                <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />
                                Do you have valid industrial license?
                            </label>
                        </div>
                        <div className="col-sm-2">
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_industrialLicense_1">
                                        <input
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_industrialLicense_1"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_industrialLicense"
                                            type="radio"
                                            defaultValue={1}
                                        />
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_industrialLicense_3">
                                        <input
                                            defaultChecked=""
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_industrialLicense_3"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_industrialLicense"
                                            type="radio"
                                            defaultValue={0}
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="form-group row align-items-center"
                        id="dpccClearanceRequiredDiv"
                        style={{ display: "none" }}
                    >
                        <div className="col-sm-6">
                            <label htmlFor="inputEmail3" className="col-form-label">
                                <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />
                                <span>Does your Industry/Trade requires DPCC Clearance?</span>
                            </label>
                        </div>
                        <div className="col-sm-2">
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_dpccClearanceRequired_1">
                                        <input
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_dpccClearanceRequired_1"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_dpccClearanceRequired"
                                            type="radio"
                                            defaultValue={1}
                                        />
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_dpccClearanceRequired_3">
                                        <input
                                            defaultChecked=""
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_dpccClearanceRequired_3"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_dpccClearanceRequired"
                                            type="radio"
                                            defaultValue={0}
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="form-group row align-items-center"
                        id="dpccCertificateDiv"
                        style={{ display: "none" }}
                    >
                        <div className="col-sm-6">
                            <label htmlFor="inputEmail3" className="col-form-label">
                                <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />
                                <span>Do you have valid DPCC Certificate?</span>
                            </label>
                        </div>
                        <div className="col-sm-2">
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasDpccCertificate_1">
                                        <input
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasDpccCertificate_1"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasDpccCertificate"
                                            type="radio"
                                            defaultValue={1}
                                        />
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasDpccCertificate_3">
                                        <input
                                            defaultChecked=""
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasDpccCertificate_3"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasDpccCertificate"
                                            type="radio"
                                            defaultValue={0}
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ------------------ -------*/}
                    <div>
                        <div
                            className="form-group row align-items-center"
                            id="nonConfirmingAreaDiv"
                            style={{ display: "none" }}
                        >
                            <div className="col-sm-6">
                                <label htmlFor="inputEmail3" className="col-form-label">
                                    <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />
                                    <span>Is your premise falls under Non-Confirming Area?</span>
                                </label>
                            </div>
                            <div className="col-sm-2">
                                <div className="form-check-inline">
                                    <div className="radio">
                                        <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_nonConfirmingArea_1">
                                            <input
                                                className="field"
                                                id="_BsesConnection_INSTANCE_f962tiSyW2Yr_nonConfirmingArea_1"
                                                name="_BsesConnection_INSTANCE_f962tiSyW2Yr_nonConfirmingArea"
                                                type="radio"
                                                defaultValue={1}
                                            />
                                            Yes
                                        </label>
                                    </div>
                                </div>
                                <div className="form-check-inline">
                                    <div className="radio">
                                        <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_nonConfirmingArea_3">
                                            <input
                                                defaultChecked=""
                                                className="field"
                                                id="_BsesConnection_INSTANCE_f962tiSyW2Yr_nonConfirmingArea_3"
                                                name="_BsesConnection_INSTANCE_f962tiSyW2Yr_nonConfirmingArea"
                                                type="radio"
                                                defaultValue={0}
                                            />
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="form-group row align-items-center"
                            id="tradeLicenseDiv"
                            style={{ display: "none" }}
                        >
                            <div className="col-sm-6">
                                <label htmlFor="inputEmail3" className="col-form-label">
                                    <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />
                                    <span>Do you have valid Trade License?</span>
                                </label>
                            </div>
                            <div className="col-sm-2">
                                <div className="form-check-inline">
                                    <div className="radio">
                                        <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasTradeLicense_1">
                                            <input
                                                className="field"
                                                id="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasTradeLicense_1"
                                                name="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasTradeLicense"
                                                type="radio"
                                                defaultValue={1}
                                            />
                                            Yes
                                        </label>
                                    </div>
                                </div>
                                <div className="form-check-inline">
                                    <div className="radio">
                                        <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasTradeLicense_3">
                                            <input
                                                defaultChecked=""
                                                className="field"
                                                id="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasTradeLicense_3"
                                                name="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasTradeLicense"
                                                type="radio"
                                                defaultValue={0}
                                            />
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ----------------------- */}
                    <div
                        className="form-group row align-items-center"
                        id="bdocertdiv"
                        style={{ display: "none" }}
                    >
                        <div className="col-sm-6">
                            <label htmlFor="inputEmail3" className="col-form-label">
                                <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />
                                Do you have{" "}
                                <span className="font-weight-bold">
                                    Certificate of Residence
                                </span>{" "}
                                from{" "}
                                <span className="font-weight-bold">
                                    Block Development Officer(BDO)
                                </span>
                                ?
                            </label>
                            <p
                                id="bdocertblink"
                                className="blink pl-3"
                                style={{ display: "none" }}
                            >
                                <span>**The certificate shall be verified during inspection.</span>
                            </p>
                        </div>
                        <div className="col-sm-2">
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasBdoCertificate_1">
                                        <input
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasBdoCertificate_1"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasBdoCertificate"
                                            type="radio"
                                            defaultValue={1}
                                        />
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasBdoCertificate_3">
                                        <input
                                            defaultChecked=""
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasBdoCertificate_3"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasBdoCertificate"
                                            type="radio"
                                            defaultValue={0}
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="form-group row align-items-center d-none"
                        id="polutiondiv"
                    >
                        <div className="col-sm-6">
                            <label htmlFor="inputEmail3" className="col-sm-6 col-form-label">
                                <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />
                                <span>
                                    {" "}
                                    Omny industry/trade has not been declared to be releasing
                                    obnoxious hazardous/pollutant by any government agency and that no
                                    orders of any court or
                                </span>
                            </label>
                            <p id="bdocertblink" className="blink pl-3">
                                <span>
                                    **The pollution certificate shall be verified during inspection.
                                </span>
                            </p>
                        </div>
                        <div className="col-sm-2">
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasPollutionCertificate_1">
                                        <input
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasPollutionCertificate_1"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasPollutionCertificate"
                                            type="radio"
                                            defaultValue={1}
                                        />
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasPollutionCertificate_3">
                                        <input
                                            defaultChecked=""
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasPollutionCertificate_3"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_hasPollutionCertificate"
                                            type="radio"
                                            defaultValue={0}
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row d-flex align-items-center">
                        <label htmlFor="inputEmail3" className="col-sm-6 col-form-label">
                            <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />
                            Do you want to avail{" "}
                            <span className="font-weight-bold">
                                e-Bill Services(paperless)
                            </span>{" "}
                            on email?
                        </label>
                        <div className="col-sm-2">
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_eServiceOnMail_1">
                                        <input
                                            defaultChecked=""
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_eServiceOnMail_1"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_eServiceOnMail"
                                            type="radio"
                                            defaultValue={1}
                                        />
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_eServiceOnMail_3">
                                        <input
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_eServiceOnMail_3"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_eServiceOnMail"
                                            type="radio"
                                            defaultValue={0}
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4" id="emailservicediv">
                            <div className="form-group input-text-wrapper">
                                <label
                                    className="control-label"
                                    htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_eServiceMailId"
                                >
                                    Enter your Email Id
                                    <span className="text-warning" id="mehp__column1__0">
                                        <svg
                                            className="lexicon-icon lexicon-icon-asterisk"
                                            focusable="false"
                                            role="presentation"
                                            title="asterisk"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                className="lexicon-icon-outline"
                                                d="M323.6,190l146.7-48.8L512,263.9l-149.2,47.6l93.6,125.2l-104.9,76.3l-96.1-126.4l-93.6,126.4L56.9,435.3l92.3-123.9
	L0,263.8l40.4-122.6L188.4,190v-159h135.3L323.6,190L323.6,190z"
                                            />
                                        </svg>
                                    </span>
                                    <span className="hide-accessible">Required</span>
                                </label>
                                <input
                                    className="field form-control"
                                    id="_BsesConnection_INSTANCE_f962tiSyW2Yr_eServiceMailId"
                                    name="_BsesConnection_INSTANCE_f962tiSyW2Yr_eServiceMailId"
                                    placeholder="Enter your email Id"
                                    type="email"
                                    defaultValue="harvinderkumar.kumar003@gmail.com"
                                    style={{
                                        fontSize: "small !important",
                                        lineHeight: "1 !important"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="form-group row align-items-center"
                        id="subsidyChecklist"
                        style={{ display: "none" }}
                    >
                        <label className="col-sm-6 col-form-label">
                            <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />
                            Do you want to opt-in for voluntary subsidy benefits?
                        </label>
                        <div className="col-sm-2">
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_optSubsidy_1">
                                        <input
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_optSubsidy_1"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_optSubsidy"
                                            type="radio"
                                            defaultValue={1}
                                        />
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_optSubsidy_3">
                                        <input
                                            defaultChecked=""
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_optSubsidy_3"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_optSubsidy"
                                            type="radio"
                                            defaultValue={0}
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row d-flex align-items-center">
                        <label className="col-sm-6 col-form-label">
                            <i className="icon-stop mr-2" style={{ fontSize: "1.2rem" }} />
                            Do you want to purchase your own CEA approved meter having additional
                            features as approved by Commission
                        </label>
                        <div className="col-sm-2">
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_purchaseMeter_1">
                                        <input
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_purchaseMeter_1"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_purchaseMeter"
                                            type="radio"
                                            defaultValue={1}
                                        />
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div className="form-check-inline">
                                <div className="radio">
                                    <label htmlFor="_BsesConnection_INSTANCE_f962tiSyW2Yr_purchaseMeter_3">
                                        <input
                                            defaultChecked=""
                                            className="field"
                                            id="_BsesConnection_INSTANCE_f962tiSyW2Yr_purchaseMeter_3"
                                            name="_BsesConnection_INSTANCE_f962tiSyW2Yr_purchaseMeter"
                                            type="radio"
                                            defaultValue={0}
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="checklist-modal" id="checklist-alert-modal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-danger">
                            <h5 className="modal-title font-weight-bold text-white">
                                Change Action?
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div
                            className="modal-body align-items-center justify-content-center"
                            style={{ paddingTop: 25, paddingBottom: 25 }}
                        >
                            <div
                                className="help-text text-danger text-center fs-18"
                                id="checklist-alert-message"
                            >
                                {/* i class="far fa-paper-plane fa-fw text-danger"></i*/}
                                You have already uploaded{" "}
                                <span id="checklist-alert-document-type-name" />. Plese delete the
                                document before changing the option.
                            </div>
                        </div>
                        <div className="modal-footer align-items-center justify-content-center">
                            <div className="text-danger text-center">
                                <button
                                    type="button"
                                    className="btn btn-danger btn-sm"
                                    id="checklist-alert-ok-btn"
                                    value="Ok"
                                    data-id=""
                                >
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ImportantDocuments;