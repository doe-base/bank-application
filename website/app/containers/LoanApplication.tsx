'use client';
import React, { useEffect, useRef, useState } from 'react';
import useStyles from '../styles/loan_application';
import FieldSet1 from '../components/LoanApplication/FieldSet1';
import FieldSet2 from '../components/LoanApplication/FieldSet2';
import FieldSet3 from '../components/LoanApplication/FieldSet3';
import FieldSet4 from '../components/LoanApplication/FieldSet4';
import FieldSet5 from '../components/LoanApplication/FieldSet5';
import FieldSet6 from '../components/LoanApplication/FieldSet6';
import FieldSet7 from '../components/LoanApplication/FieldSet7';


const LoadApplicationContainer: React.FC = () => {
    const classes = useStyles();

    const [formSubmitAttemt, setFormSubmitAttemt] = useState<boolean>(false);

    const [accountNo1, setAccountNo1] = useState<string>('')
    const [accountNo1Bool, setAccountNo1Bool] = useState<boolean>(false)
    const [applicationType1, setApplication1] = useState<string>('')
    const [applicationType1Bool, setApplication1Bool] = useState<boolean>(false)
    const [desiredLoanType1, setDesiredLoadType1] = useState<string>('')
    const [desiredLoanType1Bool, setDesiredLoadType1Bool] = useState<boolean>(false)
    const [desiredLoanAmount1, setDesiredLoadAmount1] = useState<string>('')
    const [desiredLoanAmount1Bool, setDesiredLoadAmount1Bool] = useState<boolean>(false)
    const [desiredLoanTerm1, setDesiredLoadTerm1] = useState<string>('')
    const [desiredLoanTerm1Bool, setDesiredLoadTerm1Bool] = useState<boolean>(false)

    const [paymentProtection, setPaymentProtection] = useState<string>('null')

    const [applicantName3, setApplicantName3] = useState<string>('')
    const [applicantName3Bool, setApplicantName3Bool] = useState<boolean>(false)
    const [driverLicense3, setDriverLicense3] = useState<string>('')
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


    const [lender1, setLender1] = useState<string>('')
    const [lender2, setLender2] = useState<string>('')
    const [lender3, setLender3] = useState<string>('')
    const [lender4, setLender4] = useState<string>('')
    const [lender5, setLender5] = useState<string>('')
    const [lender6, setLender6] = useState<string>('')
    const [lender7, setLender7] = useState<string>('')
    const [lender8, setLender8] = useState<string>('')
    const [lender1Type, setLender1Type] = useState<string>('')
    const [lender2Type, setLender2Type] = useState<string>('')
    const [lender3Type, setLender3Type] = useState<string>('')
    const [lender4Type, setLender4Type] = useState<string>('')
    const [lender5Type, setLender5Type] = useState<string>('')
    const [lender6Type, setLender6Type] = useState<string>('')
    const [lender7Type, setLender7Type] = useState<string>('')
    const [lender8Type, setLender8Type] = useState<string>('')
    const [lender1Balance, setLender1Balance] = useState<string>('')
    const [lender2Balance, setLender2Balance] = useState<string>('')
    const [lender3Balance, setLender3Balance] = useState<string>('')
    const [lender4Balance, setLender4Balance] = useState<string>('')
    const [lender5Balance, setLender5Balance] = useState<string>('')
    const [lender6Balance, setLender6Balance] = useState<string>('')
    const [lender7Balance, setLender7Balance] = useState<string>('')
    const [lender8Balance, setLender8Balance] = useState<string>('')
    const [lender1Min, setLender1Min] = useState<string>('')
    const [lender2Min, setLender2Min] = useState<string>('')
    const [lender3Min, setLender3Min] = useState<string>('')
    const [lender4Min, setLender4Min] = useState<string>('')
    const [lender5Min, setLender5Min] = useState<string>('')
    const [lender6Min, setLender6Min] = useState<string>('')
    const [lender7Min, setLender7Min] = useState<string>('')
    const [lender8Min, setLender8Min] = useState<string>('')

    const [childSupportPayment, setChildSupportPayment] = useState<string>('')

    const [asses1, setAsses1] = useState<string>('')
    const [asses1value, setAsses1value] = useState<string>('')
    const [asses2, setAsses2] = useState<string>('')
    const [asses2Value, setAsses2Value] = useState<string>('')

    const [bankruptcy, setBankruptcy] = useState<string>('null')
    const [lawsuit, setLawsuit] = useState<string>('null')
    const [foreclosed, setForeclosed] = useState<string>('null')
    const [decline, setDecline] = useState<string>('null')
    const [endorser, setEndorser] = useState<string>('null')
    const [whom1, setWhom1] = useState<string>('')
    const [whom2, setWhom2] = useState<string>('')



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

    const [firstNameRef2, setFirstNameRef2] = useState<string>('')
    const [middleNameRef2, setMiddleNameRef2] = useState<string>('')
    const [lastNameRef2, setLastNameRef2] = useState<string>('')
    const [suffixRef2, setSuffixRef2] = useState<string>('')
    const [homePhoneRef2, setHomePhoneRef2] = useState<any>('')
    const [cellPhoneRef2, setCellPhoneRef2] = useState<any>('')
    const [streetRef2, setStreetRef2] = useState<string>('')
    const [cityRef2, setCityRef2] = useState<string>('')
    const [stateRef2, setStateRef2] = useState<string>('')
    const [zipcodeRef2, setZipcodeRef2] = useState<string>('')



    const [preferedContact, setPreferedContact] = useState<string[]>([])
    const [comment, setComment] = useState<string>('')




    const formSubmitHandler = async (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        setFormSubmitAttemt(true)


        accountNo1 === '' ? setAccountNo1Bool(true) : setAccountNo1Bool(false)
        applicationType1 === '' ? setApplication1Bool(true) : setApplication1Bool(false)
        desiredLoanType1 === '' ? setDesiredLoadType1Bool(true) : setDesiredLoadType1Bool(false)
        !desiredLoanAmount1 ? setDesiredLoadAmount1Bool(true) : setDesiredLoadAmount1Bool(false)
        desiredLoanTerm1 === '' ? setDesiredLoadTerm1Bool(true) : setDesiredLoadTerm1Bool(false) 


        // Part 2
        applicantName3 === '' ? setApplicantName3Bool(true) : setApplicantName3Bool(false) 
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
        jointapplicantName3 === '' ? jointsetApplicantName3Bool(true) : jointsetApplicantName3Bool(false) 
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

        
        if(accountNo1 == ''){
            document.getElementById('accountnum')?.focus()
            return
        }else if(applicationType1 === '') {
            document.getElementById('applicationtype')?.focus()
            return
        }else if(desiredLoanType1 === '') {
            document.getElementById('loantype')?.focus()
            return
        }else if(desiredLoanAmount1 === '') {
            document.getElementById('desiredloadamount')?.focus()
            return
        }else if(desiredLoanTerm1 === '') {
            document.getElementById('desiredloadterm')?.focus()
            return
       }else if(applicantName3 === '') {
            document.getElementById('applicant_name')?.focus()
            return
        }else if(socialSecurity3 === '') {
            document.getElementById('social_security')?.focus()
            return
        }else if(applicantEmail3 === '') {
            document.getElementById('email')?.focus()
            return
        }else if(brithday3 === '') {
            document.getElementById('app_birthbay')?.focus()
            return
        }else if(maritalStatus === '') {
            document.getElementById('marital_status')?.focus()
            return
        }else if(cellPhone === '') {
            document.getElementById('cell_phone')?.focus()
            return
        }else if(streetAddress === '') {
            document.getElementById('stree_address')?.focus()
            return
        }else if(city === '') {
            document.getElementById('city')?.focus()
            return
        }else if(state === '') {
            document.getElementById('applicant_state')?.focus()
            return
        }else if(zipcode === '') {
            document.getElementById('zip_code')?.focus()
            return
        }else if(currentAddressSince === '') {
            document.getElementById('address_since')?.focus()
            return
        }else if(jointapplicantName3 === '') {
            document.getElementById('jointapplicant_name')?.focus()
            return
        }else if(jointsocialSecurity3 === '') {
            document.getElementById('jointsocial_security')?.focus()
            return
        }else if(jointapplicantEmail3 === '') {
            document.getElementById('jointemail')?.focus()
            return
        }else if(jointbrithday3 === '') {
            document.getElementById('jointapp_birthbay')?.focus()
            return
        }else if(jointmaritalStatus === '') {
            document.getElementById('jointmarital_status')?.focus()
            return
        }else if(jointcellPhone === '') {
            document.getElementById('jointcell_phone')?.focus()
            return
        }else if(jointstreetAddress === '') {
            document.getElementById('jointstree_address')?.focus()
            return
        }else if(jointcity === '') {
            document.getElementById('jointcity')?.focus()
            return
        }else if(jointstate === '') {
            document.getElementById('jointapplicant_state')?.focus()
            return
        }else if(jointzipcode === '') {
            document.getElementById('jointzip_code')?.focus()
            return
        }else if(jointcurrentAddressSince === '') {
            document.getElementById('jointaddress_since')?.focus()
            return
        }

        console.log(
        
            accountNo1,
            applicationType1, 
            desiredLoanType1, 
            desiredLoanAmount1, 
            desiredLoanTerm1, 
    
            paymentProtection, 
    
            applicantName3, 
            driverLicense3, 
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
            currentAddressSince, 
            previousAddress, 
            employerName, 
            employerPhone, 
            employerAddress, 
            jobTitle, 
            dateHire, 
            monthlyGrossIncome, 
            otherIncome, 
            prevEmployer, 
            yearsEmployed, 
    
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
            jointcurrentAddressSince, 
            jointpreviousAddress, 
            jointemployerName, 
            jointemployerPhone, 
            jointemployerAddress, 
            jointjobTitle, 
            jointdateHire, 
            jointmonthlyGrossIncome, 
            jointotherIncome, 
            jointprevEmployer, 
            jointyearsEmployed, 
    
    
            lender1, 
            lender2, 
            lender3, 
            lender4, 
            lender5, 
            lender6, 
            lender7, 
            lender8, 
            lender1Type, 
            lender2Type, 
            lender3Type, 
            lender4Type, 
            lender5Type, 
            lender6Type, 
            lender7Type, 
            lender8Type, 
            lender1Balance, 
            lender2Balance, 
            lender3Balance, 
            lender4Balance, 
            lender5Balance, 
            lender6Balance, 
            lender7Balance, 
            lender8Balance, 
            lender1Min, 
            lender2Min, 
            lender3Min, 
            lender4Min, 
            lender5Min, 
            lender6Min, 
            lender7Min, 
            lender8Min, 
    
            childSupportPayment, 
    
            asses1, 
            asses1value, 
            asses2, 
            asses2Value, 
    
            bankruptcy, 
            lawsuit, 
            foreclosed, 
            decline, 
            endorser, 
            whom1, 
            whom2, 
    
    
    
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
    
            firstNameRef2, 
            middleNameRef2, 
            lastNameRef2, 
            suffixRef2, 
            homePhoneRef2,
            cellPhoneRef2,
            streetRef2, 
            cityRef2, 
            stateRef2, 
            zipcodeRef2, 
    
    
    
            preferedContact, 
            comment,
        )

        

    }

    useEffect(()=> {
        formSubmitAttemt && accountNo1 === '' ? setAccountNo1Bool(true) : setAccountNo1Bool(false)
        formSubmitAttemt &&  applicationType1 === '' ? setApplication1Bool(true) : setApplication1Bool(false)
        formSubmitAttemt &&  desiredLoanType1 === '' ? setDesiredLoadType1Bool(true) : setDesiredLoadType1Bool(false)
        formSubmitAttemt &&  !desiredLoanAmount1 ? setDesiredLoadAmount1Bool(true) : setDesiredLoadAmount1Bool(false)
        formSubmitAttemt &&  desiredLoanTerm1 === '' ? setDesiredLoadTerm1Bool(true) : setDesiredLoadTerm1Bool(false) 

         // Part 2
         formSubmitAttemt && applicantName3 === '' ? setApplicantName3Bool(true) : setApplicantName3Bool(false) 
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
 
    }, [accountNo1, applicationType1, desiredLoanType1, desiredLoanAmount1, desiredLoanTerm1, applicantName3,socialSecurity3,applicantEmail3,brithday3,maritalStatus, cellPhone, streetAddress, city, state, zipcode, currentAddressSince, jointapplicantName3,jointsocialSecurity3,jointapplicantEmail3,jointbrithday3,jointmaritalStatus, jointcellPhone, jointstreetAddress, jointcity, jointstate, jointzipcode, jointcurrentAddressSince])

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
    useEffect(()=> {
        if(brithday3.length === 8){
            setBrithdayValid(isValidDateOfBirth(brithday3))
        }

        if(jointbrithday3.length === 8){
            jointsetBrithdayValid(isValidDateOfBirth(brithday3))
        }
    }, [brithday3, jointbrithday3])

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
                        <h1 className={classes.formHeaderH1}>Secure Loan Application Form</h1>
                    </div>
                </header>

                <form onSubmit={formSubmitHandler} className={classes.formBody}>


                    <FieldSet1  
                        classes={classes} 
                        accountNo1={accountNo1} 
                        applicationType1={applicationType1} 
                        desiredLoanType1={desiredLoanType1} 
                        desiredLoanAmount1={desiredLoanAmount1}
                        desiredLoanTerm1={desiredLoanTerm1}
                        setAccountNo1={setAccountNo1} 
                        setApplication1={setApplication1} 
                        setDesiredLoadType1={setDesiredLoadType1} 
                        setDesiredLoadAmount1={setDesiredLoadAmount1} 
                        setDesiredLoadTerm1={setDesiredLoadTerm1} 
                        accountNo1Bool={accountNo1Bool} 
                        application1Bool={applicationType1Bool} 
                        desiredLoadType1Bool={desiredLoanType1Bool} 
                        desiredLoadAmount1Bool={desiredLoanAmount1Bool} 
                        desiredLoadTerm1Bool={desiredLoanTerm1Bool}/>
                    <FieldSet2 classes={classes} paymentProtection={paymentProtection} setPaymentProtection={setPaymentProtection}/>
                    <FieldSet3 
                        classes={classes} 

                        applicantName3={applicantName3}
                        setApplicantName3={setApplicantName3}
                        applicantName3Bool={applicantName3Bool}
                        driverLicense3={driverLicense3}
                        setDriverLicense3={setDriverLicense3}
                        driverLicenseState3={driverLicenseState3}
                        setDriverLicenseState3={setDriverLicenseState3}
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
                        applicationType1={applicationType1}
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
                    <FieldSet5 
                        classes={classes}

                        lender1={lender1}
                        setLender1={setLender1}
                        lender2={lender2}
                        setLender2={setLender2}
                        lender3={lender3}
                        setLender3={setLender3}
                        lender4={lender4}
                        setLender4={setLender4}
                        lender5={lender5}
                        setLender5={setLender5}
                        lender6={lender6}
                        setLender6={setLender6}
                        lender7={lender7}
                        setLender7={setLender7}
                        lender8={lender8}
                        setLender8={setLender8}

                        lender1Type={lender1Type}
                        setLender1Type={setLender1Type}
                        lender2Type={lender2Type}
                        setLender2Type={setLender2Type}
                        lender3Type={lender3Type}
                        setLender3Type={setLender3Type}
                        lender4Type={lender4Type}
                        setLender4Type={setLender4Type}
                        lender5Type={lender5Type}
                        setLender5Type={setLender5Type}
                        lender6Type={lender6Type}
                        setLender6Type={setLender6Type}
                        lender7Type={lender7Type}
                        setLender7Type={setLender7Type}
                        lender8Type={lender8Type}
                        setLender8Type={setLender8Type}

                        lender1Balance={lender1Balance}
                        setLender1Balance={setLender1Balance}
                        lender2Balance={lender2Balance}
                        setLender2Balance={setLender2Balance}
                        lender3Balance={lender3Balance}
                        setLender3Balance={setLender3Balance}
                        lender4Balance={lender4Balance}
                        setLender4Balance={setLender4Balance}
                        lender5Balance={lender5Balance}
                        setLender5Balance={setLender5Balance}
                        lender6Balance={lender6Balance}
                        setLender6Balance={setLender6Balance}
                        lender7Balance={lender7Balance}
                        setLender7Balance={setLender7Balance}
                        lender8Balance={lender8Balance}
                        setLender8Balance={setLender8Balance}

                        lender1Min={lender1Min}
                        setLender1Min={setLender1Min}
                        lender2Min={lender2Min}
                        setLender2Min={setLender2Min}
                        lender3Min={lender3Min}
                        setLender3Min={setLender3Min}
                        lender4Min={lender4Min}
                        setLender4Min={setLender4Min}
                        lender5Min={lender5Min}
                        setLender5Min={setLender5Min}
                        lender6Min={lender6Min}
                        setLender6Min={setLender6Min}
                        lender7Min={lender7Min}
                        setLender7Min={setLender7Min}
                        lender8Min={lender8Min}
                        setLender8Min={setLender8Min}
                        childSupportPayment={childSupportPayment}

                        setChildSupportPayment={setChildSupportPayment}

                        asses1={asses1} 
                        setAsses1={setAsses1}
                        asses1value={asses1value} 
                        setAsses1value={setAsses1value}
                        asses2={asses2} 
                        setAsses2={setAsses2}
                        asses2Value={asses2Value} 
                        setAsses2Value={setAsses2Value}

                        bankruptcy={bankruptcy} 
                        setBankruptcy={setBankruptcy}
                        lawsuit={lawsuit}
                        setLawsuit={setLawsuit}
                        foreclosed={foreclosed}
                        setForeclosed={setForeclosed}
                        decline={decline} 
                        setDecline={setDecline}
                        endorser={endorser}
                        setEndorser={setEndorser}
                        whom1={whom1} 
                        setWhom1={setWhom1}
                        whom2={whom2} 
                        setWhom2={setWhom2}
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

                        firstNameRef2={firstNameRef2} 
                        setFirstNameRef2={setFirstNameRef2}
                        middleNameRef2={middleNameRef2} 
                        setMiddleNameRef2={setMiddleNameRef2}
                        lastNameRef2={lastNameRef2} 
                        setLastNameRef2={setLastNameRef2}
                        suffixRef2={suffixRef2} 
                        setSuffixRef2={setSuffixRef2}
                        homePhoneRef2={homePhoneRef2} 
                        setHomePhoneRef2={setHomePhoneRef2}
                        cellPhoneRef2={cellPhoneRef2} 
                        setCellPhoneRef2={setCellPhoneRef2}
                        streetRef2={streetRef2} 
                        setStreetRef2={setStreetRef2}
                        cityRef2={cityRef2} 
                        setCityRef2={setCityRef2}
                        stateRef2={stateRef2} 
                        setStateRef2={setStateRef2}
                        zipcodeRef2={zipcodeRef2} 
                        setZipcodeRef2={setZipcodeRef2}
                    
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


                        <p style={{margin: '0 0 13px', lineHeight: '1.25'}}>You agree that everything stated in this application is correct to the best of your knowledge. The Credit Union is authorized to investigate your creditworthiness, employment history, and to obtain a credit report to answer questions about their credit experience with you. You understand that any false or misleading statement in your application may cause any loan or extension of credit to be in default. You authorize us to accept your facsimile signatures on this application and agree that your facsimile signature will have the same legal force and effect as your original signature. You assume any risk that may be associated with permitting us to accept your facsimile signature.</p>
                        <p style={{margin: '0 0 13px', lineHeight: '1.25'}}>By pressing the "Submit Form" button below, you agree to the above statement. You understand that we may require additional information to finalize our credit decision and your signature on additional documents prior to disbursing any credit proceeds.</p>

                        <div className="field-button">
                            <input  type="submit" className={classes.submitButton} value="Submit" />
                        </div>
                    </fieldset>


                </form>

        </main>
  );
};

export default LoadApplicationContainer;
