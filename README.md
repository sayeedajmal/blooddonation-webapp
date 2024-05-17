# Blood Donation Website

## Introduction

This project is a web application for managing blood donation processes, including donor information, appointments, and blood bank details. The website is built using React and styled with TailwindCSS. The backend is powered by a RESTful API for managing the data.

## Features

- User registration and login
- View and manage donor information
- Schedule and view appointments
- Track medical history
- Manage blood bank details
- Secure endpoints with JWT authentication

## Technology Stack

- **Frontend**: React, TailwindCSS
- **Backend**: Spring Boot, Java, MySQL
- **Authentication**: JWT

## Installation

### Prerequisites

- Node.js
- npm or yarn

### Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/sayeedajmal/blooddonayion-webapp.git
    cd blood-donation-website
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the development server:
    ```bash
    npm start
    # or
    yarn start
    ```

## TailwindCSS Setup

TailwindCSS is already configured in this project. The configuration can be found in the `tailwind.config.js` file.

## Color Palette

The website uses a color palette that aligns with the theme of blood donation:

```css
:root {
  --primary-color: #ff0000; /* Deep Red */
  --secondary-color: #b30000; /* Bright Red */
  --background-color: #ffffff; /* White */
  --light-gray: #cccccc; /* Light Gray */
  --dark-gray: #333333; /* Dark Gray */
  --accent-color: #ffd700; /* Rich Gold */
  --highlight-color: #ffa500; /* Warm Orange */
  --white-color: #ffffff;
}
```

## Major Endpoints

### Donor

- **Create Donor**
  - **URL**: `/api/v1/donor`
  - **Method**: POST
  - **Description**: Create a new donor.
  - **Payload**: Donor data

- **Show Donor**
  - **URL**: `/api/v1/donor/showDonor`
  - **Method**: GET
  - **Description**: Retrieve all donors.

- **Get Donor by ID**
  - **URL**: `/api/v1/donor/{donorId}`
  - **Method**: GET
  - **Description**: Retrieve donor details by ID.

- **Delete Donor**
  - **URL**: `/api/v1/donor/{donorId}`
  - **Method**: DELETE
  - **Description**: Delete a donor by ID.

- **Update Donor**
  - **URL**: `/api/v1/donor/updateDonor`
  - **Method**: PATCH
  - **Description**: Update donor details.

### Appointment

- **Create Appointment**
  - **URL**: `/api/v1/appointment`
  - **Method**: POST
  - **Description**: Create a new appointment.
  - **Payload**: Appointment data and donor ID

- **Show Appointments**
  - **URL**: `/api/v1/appointment/showAppointment`
  - **Method**: GET
  - **Description**: Retrieve all appointments.

- **Get Appointment by ID**
  - **URL**: `/api/v1/appointment/{appointmentId}`
  - **Method**: GET
  - **Description**: Retrieve appointment details by ID.

- **Delete Appointment**
  - **URL**: `/api/v1/appointment/{appointmentId}`
  - **Method**: DELETE
  - **Description**: Delete an appointment by ID.

- **Update Appointment**
  - **URL**: `/api/v1/appointment/updateAppointment`
  - **Method**: PATCH
  - **Description**: Update appointment details.

- **Get Today's Appointments**
  - **URL**: `/api/v1/appointment/todayAppointments`
  - **Method**: GET
  - **Description**: Retrieve today's appointments.

- **Get Unappointed Donors**
  - **URL**: `/api/v1/appointment/doAppointDonor`
  - **Method**: GET
  - **Description**: Retrieve donors who are not appointed yet.

- **Find Appointments by Date**
  - **URL**: `/api/v1/appointment/findByDate`
  - **Method**: GET
  - **Description**: Retrieve appointments by date.
  - **Payload**: Date (LocalDate)

### Medical History

- **Create Medical History**
  - **URL**: `/api/v1/medicalHistory`
  - **Method**: POST
  - **Description**: Create a new medical history record.
  - **Payload**: Medical history data and donor ID

- **Show Medical Histories**
  - **URL**: `/api/v1/medicalHistory/showHistory`
  - **Method**: GET
  - **Description**: Retrieve all medical histories.

- **Get Medical History by ID**
  - **URL**: `/api/v1/medicalHistory/{historyId}`
  - **Method**: GET
  - **Description**: Retrieve medical history details by ID.

- **Get Medical History by Donor ID**
  - **URL**: `/api/v1/medicalHistory/findByDonor/{donorId}`
  - **Method**: GET
  - **Description**: Retrieve medical history by donor ID.

- **Delete Medical History**
  - **URL**: `/api/v1/medicalHistory/{historyId}`
  - **Method**: DELETE
  - **Description**: Delete a medical history record by ID.

- **Update Medical History**
  - **URL**: `/api/v1/medicalHistory/updateHistory`
  - **Method**: PATCH
  - **Description**: Update medical history details.

### Staff

- **Create Staff**
  - **URL**: `/api/v1/staff`
  - **Method**: POST
  - **Description**: Create a new staff member.
  - **Payload**: Staff data

- **Show Staff Members**
  - **URL**: `/api/v1/staff/showStaff`
  - **Method**: GET
  - **Description**: Retrieve all staff members.

- **Get Staff by ID**
  - **URL**: `/api/v1/staff/{staffId}`
  - **Method**: GET
  - **Description**: Retrieve staff member details by ID.

- **Delete Staff**
  - **URL**: `/api/v1/staff/{staffId}`
  - **Method**: DELETE
  - **Description**: Delete a staff member by ID.

- **Update Staff**
  - **URL**: `/api/v1/staff/updateStaff`
  - **Method**: PATCH
  - **Description**: Update staff details.

- **Update Staff Position**
  - **URL**: `/api/v1/staff/updateStaffPosition`
  - **Method**: PATCH
  - **Description**: Update staff position details.

### Donation

- **Create Donation**
  - **URL**: `/api/v1/donation`
  - **Method**: POST
  - **Description**: Create a new donation record.
  - **Payload**: Donation data and appointment ID

- **Show Donations**
  - **URL**: `/api/v1/donation/showDonation`
  - **Method**: GET
  - **Description**: Retrieve all donation records.

- **Get Donation by ID**
  - **URL**: `/api/v1/donation/{donationId}`
  - **Method**: GET
  - **Description**: Retrieve donation details by ID.

- **Update Donation**
  - **URL**: `/api/v1/donation/updateDonation`
  - **Method**: PATCH
  - **Description**: Update donation details.

### Blood Bank

- **Create Blood Bank**
  - **URL**: `/api/v1/bloodBank`
  - **Method**: POST
  - **Description**: Create a new blood bank record.
  - **Payload**: Blood bank data

- **Show Blood Banks**
  - **URL**: `/api/v1/bloodBank/showBank`
  - **Method**: GET
  - **Description**: Retrieve all blood bank records.

- **Get Blood Bank by ID**
  - **URL**: `/api/v1/bloodBank/{bloodBankId}`
  - **Method**: GET
  - **Description**: Retrieve blood bank details by ID.

- **Update Blood Bank**
  - **URL**: `/api/v1/bloodBank/updateBloodBank`
  - **Method**: PATCH
  - **Description**: Update blood bank details.

## Contributing

We welcome contributions to improve our Blood Donation Website. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or issues, please contact us at sayeedajmala06@gmail.com