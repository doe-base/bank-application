'use client';
import React, { useEffect, useState } from 'react';
import useStyles from '../styles/loan_application';
import FieldSet1 from '../components/SignupForm/FieldSet1';
import FieldSet2 from '../components/SignupForm/FieldSet2';
import FieldSet3 from '../components/SignupForm/FieldSet3';
import FieldSet4 from '../components/SignupForm/FieldSet4';
import FieldSet5 from '../components/SignupForm/FieldSet5';
import FieldSet6 from '../components/SignupForm/FieldSet6';
import FieldSet7 from '../components/SignupForm/FieldSet7';



const SignupFormContainer: React.FC = () => {
    const classes = useStyles();

    const [formSubmitAttemt, setFormSubmitAttemt] = useState<boolean>(false);

    const [firstName, setFirstName] = useState<string>('')
    const [firstNameBool, setFirstNameBool] = useState<boolean>(false)
    const [lastName, setLastName] = useState<string>('')
    const [lastNameBool, setLastNameBool] = useState<boolean>(false)
    const [middleName, setMiddleName] = useState<string>('')

    const [identificationMeans, setIdentificationMeans] = useState<string>('')
    const [identityNumber, setIdentityNumber] = useState<string>('')
    const [identityNumberBool, setIdentityNumberBool] = useState<boolean>(false)
    const [driverLicenseState3, setDriverLicenseState3] = useState<string>('')


    const [socialSecurity3, setSocialSecurity3] = useState<any>('')
    const [socialSecurity3Bool, setSocialSecurity3Bool] = useState<boolean>(false)
    const [applicantEmail3, setApplicantEmail3] = useState<string>('')
    const [applicantEmail3Bool, setApplicantEmail3Bool] = useState<boolean>(false)
    const [usCitizen, setUsCitizen] = useState<string>('null')
    const [brithday3, setbrithday3] = useState<any>('')
    const [brithday3Bool, setbrithday3Bool] = useState<boolean>(false)
    const [brithdayValid, setBrithdayValid] = useState<boolean>(true)
    const [maritalStatus, setMaritalStatus] = useState<string>('')
    const [maritalStatusBool, setMaritalStatusBool] = useState<boolean>(false)
    const [homePhone, setHomePhone] = useState<string>('')
    const [cellPhone, setCellPhone] = useState<any>('')
    const [cellPhoneBool, setCellPhoneBool] = useState<boolean>(false)
    const [streetAddress, setStreetAddress] = useState<string>('')
    const [streetAddressBool, setStreetAddressBool] = useState<boolean>(false)
    const [city, setCity] = useState<string>('')
    const [cityBool, setCityBool] = useState<boolean>(false)
    const [state, setState] = useState<string>('')
    const [stateBool, setStateBool] = useState<boolean>(false)
    const [zipcode, setZipcode] = useState<string>('')
    const [zipcodeBool, setZipcodeBool] = useState<boolean>(false)
    const [currentAddressSince, setCurrentAddressSince] = useState<any>('')
    const [currentAddressSinceBool, setCurrentAddressSinceBool] = useState<boolean>(false)
    const [previousAddress, setPreviousAddress] = useState<string>('')
    const [employerName, setEmployerName] = useState<string>('')
    const [employerPhone, setEmployerPhone] = useState<any>('')
    const [employerAddress, setEmployerAddress] = useState<string>('')
    const [jobTitle, setJobTitle] = useState<string>('')
    const [dateHire, setDateHire] = useState<any>('')
    const [monthlyGrossIncome, setMonthlyGrossIncome] = useState<string>('')
    const [otherIncome, setOtherIncome] = useState<string>('')
    const [prevEmployer, setPrevEmployer] = useState<string>('')
    const [yearsEmployed, setYearsEmployed] = useState<string>('')

    const [accountType, setAccountType] = useState<string>('savings')
    const [accountPerson, setAccountPerson] = useState<string>('individual')

    const [jointapplicantName3, jointsetApplicantName3] = useState<string>('')
    const [jointapplicantName3Bool, jointsetApplicantName3Bool] = useState<boolean>(false)
    const [jointdriverLicense3, jointsetDriverLicense3] = useState<string>('')
    const [jointdriverLicenseState3, jointsetDriverLicenseState3] = useState<string>('')
    const [jointsocialSecurity3, jointsetSocialSecurity3] = useState<any>('')
    const [jointsocialSecurity3Bool, jointsetSocialSecurity3Bool] = useState<boolean>(false)
    const [jointapplicantEmail3, jointsetApplicantEmail3] = useState<string>('')
    const [jointapplicantEmail3Bool, jointsetApplicantEmail3Bool] = useState<boolean>(false)
    const [jointusCitizen, jointsetUsCitizen] = useState<string>('null')
    const [jointbrithday3, jointsetbrithday3] = useState<any>('')
    const [jointbrithday3Bool, jointsetbrithday3Bool] = useState<boolean>(false)
    const [jointbrithdayValid, jointsetBrithdayValid] = useState<boolean>(true)
    const [jointmaritalStatus, jointsetMaritalStatus] = useState<string>('')
    const [jointmaritalStatusBool, jointsetMaritalStatusBool] = useState<boolean>(false)
    const [jointhomePhone, jointsetHomePhone] = useState<string>('')
    const [jointcellPhone, jointsetCellPhone] = useState<any>('')
    const [jointcellPhoneBool, jointsetCellPhoneBool] = useState<boolean>(false)
    const [jointstreetAddress, jointsetStreetAddress] = useState<string>('')
    const [jointstreetAddressBool, jointsetStreetAddressBool] = useState<boolean>(false)
    const [jointcity, jointsetCity] = useState<string>('')
    const [jointcityBool, jointsetCityBool] = useState<boolean>(false)
    const [jointstate, jointsetState] = useState<string>('')
    const [jointstateBool, jointsetStateBool] = useState<boolean>(false)
    const [jointzipcode, jointsetZipcode] = useState<string>('')
    const [jointzipcodeBool, jointsetZipcodeBool] = useState<boolean>(false)
    const [jointcurrentAddressSince, jointsetCurrentAddressSince] = useState<any>('')
    const [jointcurrentAddressSinceBool, jointsetCurrentAddressSinceBool] = useState<boolean>(false)
    const [jointpreviousAddress, jointsetPreviousAddress] = useState<string>('')
    const [jointemployerName, jointsetEmployerName] = useState<string>('')
    const [jointemployerPhone, jointsetEmployerPhone] = useState<any>('')
    const [jointemployerAddress, jointsetEmployerAddress] = useState<string>('')
    const [jointjobTitle, jointsetJobTitle] = useState<string>('')
    const [jointdateHire, jointsetDateHire] = useState<any>('')
    const [jointmonthlyGrossIncome, jointsetMonthlyGrossIncome] = useState<string>('')
    const [jointotherIncome, jointsetOtherIncome] = useState<string>('')
    const [jointprevEmployer, jointsetPrevEmployer] = useState<string>('')
    const [jointyearsEmployed, jointsetYearsEmployed] = useState<string>('')

    const [firstNameRef1, setFirstNameRef1] = useState<string>('')
    const [middleNameRef1, setMiddleNameRef1] = useState<string>('')
    const [lastNameRef1, setLastNameRef1] = useState<string>('')
    const [suffixRef1, setSuffixRef1] = useState<string>('')
    const [homePhoneRef1, setHomePhoneRef1] = useState<any>('')
    const [cellPhoneRef1, setCellPhoneRef1] = useState<any>('')
    const [streetRef1, setStreetRef1] = useState<string>('')
    const [cityRef1, setCityRef1] = useState<string>('')
    const [stateRef1, setStateRef1] = useState<string>('')
    const [zipcodeRef1, setZipcodeRef1] = useState<string>('')

    const [preferedContact, setPreferedContact] = useState<string[]>([])
    const [comment, setComment] = useState<string>('')

    const [agree, setAgree] = useState<string[]>([])
    const [notAgreed, setNotAgreed] = useState<boolean>(true)



    const formSubmitHandler = async (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        setFormSubmitAttemt(true)

        firstName === '' ? setFirstNameBool(true) : setFirstNameBool(false)
        lastName === '' ? setLastNameBool(true) : setLastNameBool(false)

        // Part 2
        socialSecurity3 === '' ? setSocialSecurity3Bool(true) : setSocialSecurity3Bool(false) 
        applicantEmail3 === '' ? setApplicantEmail3Bool(true) : setApplicantEmail3Bool(false) 
        brithday3 === '' ? setbrithday3Bool(true) : setbrithday3Bool(false) 
        maritalStatus === '' ? setMaritalStatusBool(true) : setMaritalStatusBool(false) 
        cellPhone === '' ? setCellPhoneBool(true) : setCellPhoneBool(false) 
        streetAddress === '' ? setStreetAddressBool(true) : setStreetAddressBool(false) 
        city === '' ? setCityBool(true) : setCityBool(false) 
        state === '' ? setStateBool(true) : setStateBool(false) 
        zipcode === '' ? setZipcodeBool(true) : setZipcodeBool(false) 
        currentAddressSince === '' ? setCurrentAddressSinceBool(true) : setCurrentAddressSinceBool(false)

        // Part 2 joint
        jointsocialSecurity3 === '' ? jointsetSocialSecurity3Bool(true) : jointsetSocialSecurity3Bool(false) 
        jointapplicantEmail3 === '' ? jointsetApplicantEmail3Bool(true) : jointsetApplicantEmail3Bool(false) 
        jointbrithday3 === '' ? jointsetbrithday3Bool(true) : jointsetbrithday3Bool(false) 
        jointmaritalStatus === '' ? jointsetMaritalStatusBool(true) : jointsetMaritalStatusBool(false) 
        jointcellPhone === '' ? jointsetCellPhoneBool(true) : jointsetCellPhoneBool(false) 
        jointstreetAddress === '' ? jointsetStreetAddressBool(true) : jointsetStreetAddressBool(false) 
        jointcity === '' ? jointsetCityBool(true) : jointsetCityBool(false) 
        jointstate === '' ? jointsetStateBool(true) : jointsetStateBool(false) 
        jointzipcode === '' ? jointsetZipcodeBool(true) : jointsetZipcodeBool(false) 
        jointcurrentAddressSince === '' ? jointsetCurrentAddressSinceBool(true) : jointsetCurrentAddressSinceBool(false) 



        if(firstName === '') {
            document.getElementById('social_security')?.focus()
            console.log('1')
            return
        }else if(lastName === '') {
            document.getElementById('social_security')?.focus()
            console.log('2')
            return
        }else if(applicantEmail3 === '') {
            document.getElementById('email')?.focus()
            console.log('3')
            return
        }else if(brithday3 === '') {
            document.getElementById('app_birthbay')?.focus()
            console.log('4')
            return
        }else if(maritalStatus === '') {
            document.getElementById('marital_status')?.focus()
            console.log('5')
            return
        }else if(cellPhone === '') {
            document.getElementById('cell_phone')?.focus()
            console.log('6')
            return
        }else if(streetAddress === '') {
            document.getElementById('stree_address')?.focus()
            console.log('7')
            return
        }else if(city === '') {
            document.getElementById('city')?.focus()
            console.log('8')
            return
        }else if(state === '') {
            document.getElementById('applicant_state')?.focus()
            console.log('9')
            return
        }else if(zipcode === '') {
            document.getElementById('zip_code')?.focus()
            console.log('10')
            return
        }else if(jointapplicantName3 === '') {
            document.getElementById('jointapplicant_name')?.focus()
            console.log('12')
            return
        }else if(jointsocialSecurity3 === '') {
            document.getElementById('jointsocial_security')?.focus()
            console.log('13')
            return
        }else if(jointapplicantEmail3 === '') {
            document.getElementById('jointemail')?.focus()
            console.log('14')
            return
        }else if(jointbrithday3 === '') {
            document.getElementById('jointapp_birthbay')?.focus()
            console.log('15')
            return
        }else if(jointmaritalStatus === '') {
            document.getElementById('jointmarital_status')?.focus()
            console.log('16')
            return
        }else if(jointcellPhone === '') {
            document.getElementById('jointcell_phone')?.focus()
            console.log('17')
            return
        }else if(jointstreetAddress === '') {
            document.getElementById('jointstree_address')?.focus()
            console.log('18')
            return
        }else if(jointcity === '') {
            document.getElementById('jointcity')?.focus()
            console.log('19')
            return
        }else if(jointstate === '') {
            document.getElementById('jointapplicant_state')?.focus()
            console.log('20')
            return
        }else if(jointzipcode === '') {
            document.getElementById('jointzip_code')?.focus()
            console.log('21')
            return
        }



        console.log(
        
            firstName,
            lastName, 
            middleName,
            
            identificationMeans, 
            identityNumber,
            driverLicenseState3, 


            socialSecurity3, 
            applicantEmail3, 
            usCitizen, 
            brithday3, 
            maritalStatus, 
            homePhone, 
            cellPhone, 
            streetAddress, 
            city, 
            state, 
            zipcode, 
            employerName, 
            employerPhone, 
            employerAddress, 
            jobTitle, 
            dateHire, 
            monthlyGrossIncome, 
            otherIncome, 
            prevEmployer, 
            yearsEmployed, 

            accountType,
            accountPerson,

            jointapplicantName3,
            jointdriverLicense3, 
            jointdriverLicenseState3, 
            jointsocialSecurity3, 
            jointapplicantEmail3, 
            jointusCitizen, 
            jointbrithday3, 
            jointmaritalStatus, 
            jointhomePhone, 
            jointcellPhone, 
            jointstreetAddress, 
            jointcity, 
            jointstate, 
            jointzipcode, 
            jointemployerName, 
            jointemployerPhone, 
            jointemployerAddress, 
            jointjobTitle, 
            jointdateHire, 
            jointmonthlyGrossIncome, 
            jointotherIncome, 
            jointprevEmployer, 
            jointyearsEmployed,

            firstNameRef1, 
            middleNameRef1, 
            lastNameRef1, 
            suffixRef1, 
            homePhoneRef1, 
            cellPhoneRef1, 
            streetRef1, 
            cityRef1, 
            stateRef1, 
            zipcodeRef1,

            preferedContact,
            comment
        )

    }

    useEffect(()=> {
        formSubmitAttemt && firstName === '' ? setFirstNameBool(true) : setFirstNameBool(false)
        formSubmitAttemt &&  lastName === '' ? setLastNameBool(true) : setLastNameBool(false)

        // Part 2
        formSubmitAttemt && socialSecurity3 === '' ? setSocialSecurity3Bool(true) : setSocialSecurity3Bool(false) 
        formSubmitAttemt && applicantEmail3 === '' ? setApplicantEmail3Bool(true) : setApplicantEmail3Bool(false) 
        formSubmitAttemt && brithday3 === '' ? setbrithday3Bool(true) : setbrithday3Bool(false) 
        formSubmitAttemt && maritalStatus === '' ? setMaritalStatusBool(true) : setMaritalStatusBool(false) 
        formSubmitAttemt && cellPhone === '' ? setCellPhoneBool(true) : setCellPhoneBool(false) 
        formSubmitAttemt && streetAddress === '' ? setStreetAddressBool(true) : setStreetAddressBool(false) 
        formSubmitAttemt && city === '' ? setCityBool(true) : setCityBool(false) 
        formSubmitAttemt && state === '' ? setStateBool(true) : setStateBool(false) 
        formSubmitAttemt && zipcode === '' ? setZipcodeBool(true) : setZipcodeBool(false) 
        formSubmitAttemt && currentAddressSince === '' ? setCurrentAddressSinceBool(true) : setCurrentAddressSinceBool(false)

        // Part 2 joint
        formSubmitAttemt && jointapplicantName3 === '' ? jointsetApplicantName3Bool(true) : jointsetApplicantName3Bool(false) 
        formSubmitAttemt && jointsocialSecurity3 === '' ? jointsetSocialSecurity3Bool(true) : jointsetSocialSecurity3Bool(false) 
        formSubmitAttemt && jointapplicantEmail3 === '' ? jointsetApplicantEmail3Bool(true) : jointsetApplicantEmail3Bool(false) 
        formSubmitAttemt && jointbrithday3 === '' ? jointsetbrithday3Bool(true) : jointsetbrithday3Bool(false) 
        formSubmitAttemt && jointmaritalStatus === '' ? jointsetMaritalStatusBool(true) : jointsetMaritalStatusBool(false) 
        formSubmitAttemt && jointcellPhone === '' ? jointsetCellPhoneBool(true) : jointsetCellPhoneBool(false) 
        formSubmitAttemt && jointstreetAddress === '' ? jointsetStreetAddressBool(true) : jointsetStreetAddressBool(false) 
        formSubmitAttemt && jointcity === '' ? jointsetCityBool(true) : jointsetCityBool(false) 
        formSubmitAttemt && jointstate === '' ? jointsetStateBool(true) : jointsetStateBool(false) 
        formSubmitAttemt && jointzipcode === '' ? jointsetZipcodeBool(true) : jointsetZipcodeBool(false) 
        formSubmitAttemt && jointcurrentAddressSince === '' ? jointsetCurrentAddressSinceBool(true) : jointsetCurrentAddressSinceBool(false)

        
    }, [socialSecurity3,applicantEmail3,brithday3,maritalStatus, cellPhone, streetAddress, city, state, zipcode, currentAddressSince, jointapplicantName3,jointsocialSecurity3,jointapplicantEmail3,jointbrithday3,jointmaritalStatus, jointcellPhone, jointstreetAddress, jointcity, jointstate, jointzipcode, jointcurrentAddressSince])

    function isValidDateOfBirth(dateOfBirth: string): boolean {
        // Regex to match MMDDYYYY format
        const regex = /^\d{8}$/;
        
        // Check if the format is valid (8 digits)
        if (!regex.test(dateOfBirth)) {
            return false;
        }
        
        // Extract month, day, and year
        const month = parseInt(dateOfBirth.substring(0, 2), 10);
        const day = parseInt(dateOfBirth.substring(2, 4), 10);
        const year = parseInt(dateOfBirth.substring(4), 10);
        
        // Check for valid ranges of month and year
        if (year < 1000 || year > 3000 || month === 0 || month > 12) {
            return false;
        }
        
        // Check for valid day based on month length (considering leap years)
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            daysInMonth[1] = 29; // Leap year
        }
        
        return day > 0 && day <= daysInMonth[month - 1];
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const isSelected = e.target.checked;
      
        if (isSelected) {
          setAgree([...agree, value]);
        } else {
          setAgree(agree.filter((item) => item !== value));
        };
    };

    useEffect(()=>{
        if(agree[0] === 'agreed'){
            setNotAgreed(false)
        }else{
            setNotAgreed(true)
        }
    }, [agree])

  return (
        <main className={classes.main}>
                <header className={classes.header}>
                    <div className={classes.headerHalf}>
                        <a href="/" className={classes.logoLink}>
                            <img src="/imgs/altlogo.png" alt="Elite Community Credit Union Logo" className={classes.logo} />
                        </a>
                        <address className={classes.formHeaderAddress}>
                        [Addres goes here]<br />
                        Phone: NIL <span>•</span> Fax: NIL
                        </address>
                    </div>
                    <div className={classes.headerHalf}>
                        <h1 className={classes.formHeaderH1}>Secure Registration Form</h1>
                    </div>
                </header>

                <form onSubmit={formSubmitHandler} className={classes.formBody}>


                    <FieldSet1  
                        classes={classes} 
                        firstName={firstName} 
                        lastName={lastName}
                        middleName={middleName}
                    
                        setFirstName={setFirstName} 
                        setLastName={setLastName} 
                        setMiddleName={setMiddleName}

                        firstNameBool={firstNameBool} 
                        lastNameBool={lastNameBool} 
                    />
                    <FieldSet2 
                        classes={classes}
                        identificationMeans={identificationMeans}
                        setIdentificationMeans={setIdentificationMeans}

                        identityNumber={identityNumber}
                        setIdentityNumber={setIdentityNumber}
                        identityNumberBool={identityNumberBool}

                        driverLicenseState3={driverLicenseState3}
                        setDriverLicenseState3={setDriverLicenseState3}
                    />
                    <FieldSet3 
                        classes={classes}
                        socialSecurity3={socialSecurity3}
                        setSocialSecurity3={setSocialSecurity3}
                        socialSecurity3Bool={socialSecurity3Bool}
                        applicantEmail3={applicantEmail3}
                        setApplicantEmail3={setApplicantEmail3}
                        applicantEmail3Bool={applicantEmail3Bool}
                        usCitizen={usCitizen}
                        setUsCitizen={setUsCitizen}
                        brithday3={brithday3}
                        setbrithday3={setbrithday3}
                        brithdayValid={brithdayValid}
                        brithday3Bool={brithday3Bool}
                        maritalStatus={maritalStatus}
                        setMaritalStatus={setMaritalStatus}
                        maritalStatusBool={maritalStatusBool}
                        homePhone={homePhone}
                        setHomePhone={setHomePhone}
                        cellPhone={cellPhone}
                        setCellPhone={setCellPhone}
                        cellPhoneBool={cellPhoneBool}
                        streetAddress={streetAddress}
                        setStreetAddress={setStreetAddress}
                        streetAddressBool={streetAddressBool}
                        city={city}
                        setCity={setCity}
                        cityBool={cityBool}
                        state={state}
                        setState={setState}
                        stateBool={stateBool}
                        zipcode={zipcode}
                        setZipcode={setZipcode}
                        zipcodeBool={zipcodeBool}
                        currentAddressSince={currentAddressSince}
                        setCurrentAddressSince={setCurrentAddressSince}
                        currentAddressSinceBool={currentAddressSinceBool}
                        previousAddress={previousAddress}
                        setPreviousAddress={setPreviousAddress}
                        employerName={employerName}
                        setEmployerName={setEmployerName}
                        employerPhone={employerPhone}
                        setEmployerPhone={setEmployerPhone}
                        employerAddress={employerAddress}
                        setEmployerAddress={setEmployerAddress}
                        jobTitle={jobTitle}
                        setJobTitle={setJobTitle}
                        dateHire={dateHire}
                        setDateHire={setDateHire}
                        monthlyGrossIncome={monthlyGrossIncome}
                        setMonthlyGrossIncome={setMonthlyGrossIncome}
                        otherIncome={otherIncome}
                        setOtherIncome={setOtherIncome}
                        prevEmployer={prevEmployer}
                        setPrevEmployer={setPrevEmployer}
                        yearsEmployed={yearsEmployed}
                        setYearsEmployed={setYearsEmployed}
                    />

                    <FieldSet4 
                        classes={classes} 
                        accountType={accountType} 
                        setAccountType={setAccountType} 
                        accountPerson={accountPerson}
                        setAccountPerson={setAccountPerson}
                    />

                    <FieldSet5 
                    
                        accountPerson={accountPerson}
                        classes={classes} 

                        jointapplicantName3={jointapplicantName3}
                        jointsetApplicantName3={jointsetApplicantName3}
                        jointapplicantName3Bool={jointapplicantName3Bool}
                        jointdriverLicense3={jointdriverLicense3}
                        jointsetDriverLicense3={jointsetDriverLicense3}
                        jointdriverLicenseState3={jointdriverLicenseState3}
                        jointsetDriverLicenseState3={jointsetDriverLicenseState3}
                        jointsocialSecurity3={jointsocialSecurity3}
                        jointsetSocialSecurity3={jointsetSocialSecurity3}
                        jointsocialSecurity3Bool={jointsocialSecurity3Bool}
                        jointapplicantEmail3={jointapplicantEmail3}
                        jointsetApplicantEmail3={jointsetApplicantEmail3}
                        jointapplicantEmail3Bool={jointapplicantEmail3Bool}
                        jointusCitizen={jointusCitizen}
                        jointsetUsCitizen={jointsetUsCitizen}
                        jointbrithday3={jointbrithday3}
                        jointsetbrithday3={jointsetbrithday3}
                        jointbrithdayValid={jointbrithdayValid}
                        jointbrithday3Bool={jointbrithday3Bool}
                        jointmaritalStatus={jointmaritalStatus}
                        jointsetMaritalStatus={jointsetMaritalStatus}
                        jointmaritalStatusBool={jointmaritalStatusBool}
                        jointhomePhone={jointhomePhone}
                        jointsetHomePhone={jointsetHomePhone}
                        jointcellPhone={jointcellPhone}
                        jointsetCellPhone={jointsetCellPhone}
                        jointcellPhoneBool={jointcellPhoneBool}
                        jointstreetAddress={jointstreetAddress}
                        jointsetStreetAddress={jointsetStreetAddress}
                        jointstreetAddressBool={jointstreetAddressBool}
                        jointcity={jointcity}
                        jointsetCity={jointsetCity}
                        jointcityBool={jointcityBool}
                        jointstate={jointstate}
                        jointsetState={jointsetState}
                        jointstateBool={jointstateBool}
                        jointzipcode={jointzipcode}
                        jointsetZipcode={jointsetZipcode}
                        jointzipcodeBool={jointzipcodeBool}
                        jointcurrentAddressSince={jointcurrentAddressSince}
                        jointsetCurrentAddressSince={jointsetCurrentAddressSince}
                        jointcurrentAddressSinceBool={jointcurrentAddressSinceBool}
                        jointpreviousAddress={jointpreviousAddress}
                        jointsetPreviousAddress={jointsetPreviousAddress}
                        jointemployerName={jointemployerName}
                        jointsetEmployerName={jointsetEmployerName}
                        jointemployerPhone={jointemployerPhone}
                        jointsetEmployerPhone={jointsetEmployerPhone}
                        jointemployerAddress={jointemployerAddress}
                        jointsetEmployerAddress={jointsetEmployerAddress}
                        jointjobTitle={jointjobTitle}
                        jointsetJobTitle={jointsetJobTitle}
                        jointdateHire={jointdateHire}
                        jointsetDateHire={jointsetDateHire}
                        jointmonthlyGrossIncome={jointmonthlyGrossIncome}
                        jointsetMonthlyGrossIncome={jointsetMonthlyGrossIncome}
                        jointotherIncome={jointotherIncome}
                        jointsetOtherIncome={jointsetOtherIncome}
                        jointprevEmployer={jointprevEmployer}
                        jointsetPrevEmployer={jointsetPrevEmployer}
                        jointyearsEmployed={jointyearsEmployed}
                        jointsetYearsEmployed={jointsetYearsEmployed}
                    
                    />

                    <FieldSet6
                        classes={classes} 

                        firstNameRef1={firstNameRef1} 
                        setFirstNameRef1={setFirstNameRef1}
                        middleNameRef1={middleNameRef1} 
                        setMiddleNameRef1={setMiddleNameRef1}
                        lastNameRef1={lastNameRef1} 
                        setLastNameRef1={setLastNameRef1}
                        suffixRef1={suffixRef1} 
                        setSuffixRef1={setSuffixRef1}
                        homePhoneRef1={homePhoneRef1} 
                        setHomePhoneRef1={setHomePhoneRef1}
                        cellPhoneRef1={cellPhoneRef1} 
                        setCellPhoneRef1={setCellPhoneRef1}
                        streetRef1={streetRef1} 
                        setStreetRef1={setStreetRef1}
                        cityRef1={cityRef1} 
                        setCityRef1={setCityRef1}
                        stateRef1={stateRef1} 
                        setStateRef1={setStateRef1}
                        zipcodeRef1={zipcodeRef1} 
                        setZipcodeRef1={setZipcodeRef1}

                    />

                    <FieldSet7 
                        classes={classes} 

                        preferedContact={preferedContact}
                        setPreferedContact={setPreferedContact}
                        comment={comment}
                        setComment={setComment}
                    />


{/* Form Submit */}
                    <fieldset className={classes.fieldset}>
                        <legend className={classes.fieldsetTitle}>Submit Application</legend>


                        <p style={{margin: '0 0 13px', lineHeight: '1.25'}}>By pressing the "Submit Form" button below, you acknowledge that you have read, understood, and agree to the bank's Terms and Conditions. These include important details regarding your account's use, fees, privacy policies, and your rights as a customer. You also consent to receive electronic communications related to your account, where applicable. Please review the <a style={{textDecoration: 'underline', cursor: 'not-allowed'}}>Terms and Conditions</a>  carefully before providing your consent.</p>

                            <div className='checkbox-options' style={{display: 'inline-block', margin: '0 0 5px 0px'}}>
                                <label className={classes.checkLabel} htmlFor="agree">
                                    <input 
                                        className={classes.checkInput} 
                                        type="checkbox" 
                                        name="agree" 
                                        id="agree" 
                                        value="agreed" 
                                        onChange={handleChange}
                                    />
                                    <span className="checkSpan">I have read and agree to the teams and conditions</span>
                                </label>
                            </div>

                        <div className="field-button">
                            <input disabled={notAgreed}  type="submit" className={notAgreed? classes.disableSubmitBtn : classes.submitButton} value="Submit Form" />
                        </div>
                    </fieldset>


                </form>

        </main>
  );
};

export default SignupFormContainer;
