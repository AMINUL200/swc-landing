import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    employees: '',
    phone: '',
    message: '',
    hearAbout: '',
    terms: false,
};

const PopupModel = ({ show, onClose }) => {
    const [formData, setFormData] = useState(initialFormState);
    const [errors, setErrors] = useState({});
    const [isClosing, setIsClosing] = useState(false);
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
            setIsClosing(false);
            setAnimationClass('one');
        } else {
            document.body.style.overflow = '';
        }
    }, [show]);

    const handleClose = () => {
        setAnimationClass('one out');
        setTimeout(() => {
            onClose();
        }, 1300); // Matches the total animation duration
    };

    if (!show && !isClosing) return null;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{3,6}$/;

        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.company.trim()) newErrors.company = 'Company name is required';
        if (!formData.employees) newErrors.employees = 'Please select number of employees';

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.hearAbout) newErrors.hearAbout = 'This field is required';
        if (!formData.terms) newErrors.terms = 'You must agree to the terms';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('✅ Form submitted:', formData);
            setFormData(initialFormState);
            onClose();
        }
    };

    const getFieldClass = (fieldName) => {
        if (errors[fieldName]) return 'form-control invalid';
        if (formData[fieldName] && !errors[fieldName]) return 'form-control success';
        return 'form-control';
    };

    console.log(errors.terms);


    return (
        <div className={`modal-overlay ${animationClass}`} onClick={handleClose}>
            <div className="modal-background">
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <h3>Get Started</h3>
                        <button className="close-btn" onClick={handleClose}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className='col-md-12 col-lg-6 modal-left' >
                               

                            </div>
                            <div className='col-md-12 col-lg-6'>
                                <form name="register" className="form" onSubmit={handleSubmit}>
                                    {/* Row 1: First Name and Last Name */}
                                    <div className="row mb-2">
                                        <div className="col-md-6 mb-3 mb-md-0">
                                            <div className={getFieldClass('firstName')}>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    id="firstName"
                                                    className="form-input"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="firstName" className="form-label">First Name</label>
                                                {errors.firstName && <span className="form-alert">{errors.firstName}</span>}
                                                <span className="form-check">
                                                    {formData.firstName && !errors.firstName && <FontAwesomeIcon icon={faCheckCircle} className="ion-success" />}
                                                    {errors.firstName && <FontAwesomeIcon icon={faInfoCircle} className="ion-invalid" />}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className={getFieldClass('lastName')}>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    id="lastName"
                                                    className="form-input"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                                {errors.lastName && <span className="form-alert">{errors.lastName}</span>}
                                                <span className="form-check">
                                                    {formData.lastName && !errors.lastName && <FontAwesomeIcon icon={faCheckCircle} className="ion-success" />}
                                                    {errors.lastName && <FontAwesomeIcon icon={faInfoCircle} className="ion-invalid" />}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 2: Business Email */}
                                    <div className="row mb-2">
                                        <div className="col-12">
                                            <div className={getFieldClass('email')}>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className="form-input"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="email" className="form-label">Your Business Email</label>
                                                {errors.email && <span className="form-alert">{errors.email}</span>}
                                                <span className="form-check">
                                                    {formData.email && !errors.email && <FontAwesomeIcon icon={faCheckCircle} className="ion-success" />}
                                                    {errors.email && <FontAwesomeIcon icon={faInfoCircle} className="ion-invalid" />}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 3: Company Name and Number of Employees */}
                                    <div className="row mb-2">
                                        <div className="col-md-6 mb-3 mb-md-0">
                                            <div className={getFieldClass('company')}>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    id="company"
                                                    className="form-input"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="company" className="form-label">Company Name</label>
                                                {errors.company && <span className="form-alert">{errors.company}</span>}
                                                <span className="form-check">
                                                    {formData.company && !errors.company && <FontAwesomeIcon icon={faCheckCircle} className="ion-success" />}
                                                    {errors.company && <FontAwesomeIcon icon={faInfoCircle} className="ion-invalid" />}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className={getFieldClass('employees')}>
                                                <select
                                                    className="form-input"
                                                    id="employees"
                                                    name="employees"
                                                    value={formData.employees}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select</option>
                                                    <option value="1-10">1-10</option>
                                                    <option value="11-50">11-50</option>
                                                    <option value="51-200">51-200</option>
                                                    <option value="201-500">201-500</option>
                                                    <option value="500+">500+</option>
                                                </select>
                                                <label htmlFor="employees" className="form-label">Number of Employees</label>
                                                {errors.employees && <span className="form-alert">{errors.employees}</span>}
                                                <span className="form-check">
                                                    {formData.employees && !errors.employees && <FontAwesomeIcon icon={faCheckCircle} className="ion-success" />}
                                                    {errors.employees && <FontAwesomeIcon icon={faInfoCircle} className="ion-invalid" />}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 4: Contact Number */}
                                    <div className="row mb-2">
                                        <div className="col-12">
                                            <div className={getFieldClass('phone')}>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    id="phone"
                                                    className="form-input"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="phone" className="form-label">Contact Number</label>
                                                {errors.phone && <span className="form-alert">{errors.phone}</span>}
                                                <span className="form-check">
                                                    {formData.phone && !errors.phone && <FontAwesomeIcon icon={faCheckCircle} className="ion-success" />}
                                                    {errors.phone && <FontAwesomeIcon icon={faInfoCircle} className="ion-invalid" />}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 5: Your Message */}
                                    <div className="row mb-2">
                                        <div className="col-12">
                                            <div className="form-control textarea">
                                                <textarea
                                                    className="form-input"
                                                    id="message"
                                                    name="message"
                                                    rows="3"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                                <label htmlFor="message" className="form-label">Your Message</label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 6: How did you hear about us */}
                                    <div className="row mb-2">
                                        <div className="col-12">
                                            <div className={getFieldClass('hearAbout')}>
                                                <select
                                                    className="form-input"
                                                    id="hearAbout"
                                                    name="hearAbout"
                                                    value={formData.hearAbout}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select an option</option>
                                                    <option value="Google">Google Search</option>
                                                    <option value="Social Media">Social Media</option>
                                                    <option value="Referral">Referral</option>
                                                    <option value="Advertisement">Advertisement</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                <label htmlFor="hearAbout" className="form-label">How did you hear about us?</label>
                                                {errors.hearAbout && <span className="form-alert">{errors.hearAbout}</span>}
                                                <span className="form-check">
                                                    {formData.hearAbout && !errors.hearAbout && <FontAwesomeIcon icon={faCheckCircle} className="ion-success" />}
                                                    {errors.hearAbout && <FontAwesomeIcon icon={faInfoCircle} className="ion-invalid" />}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 7: Terms Checkbox */}
                                    <div className="row mb-2">
                                        <div className="col-12">
                                            <div className={`form-checkbox ${errors.terms ? 'invalid' : ''}`}>
                                                <input
                                                    className="form-checkbox-input"
                                                    type="checkbox"
                                                    name="terms"
                                                    id="terms"
                                                    checked={formData.terms}
                                                    onChange={handleChange}
                                                />
                                                <label className="form-checkbox-label" htmlFor="terms">
                                                    I agree to the terms and conditions
                                                </label>
                                                {errors.terms && (
                                                    <span className="form-alert" style={{ display: 'block' }}>
                                                        {errors.terms}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <button type="submit" className="theme-btn">
                                                Submit Now
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopupModel;