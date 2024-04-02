"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import React, { useState } from "react";
import { FiUser, FiLock, FiCreditCard } from "react-icons/fi";

// Mock data for user details, current course, progress, and notifications
const userDetails = {
  name: "John Does",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
};

const currentCourse = {
  name: "Saloon Vehicles [ Code B ]",
  startDate: "April 15, 2024",
  duration: "4 weeks",
};

const progressReports = [
  { date: "April 22, 2024", report: "You have completed 30% of the course." },
  {
    date: "April 29, 2024",
    report: "Your driving skills are improving steadily.",
  },
];

const notifications = [
  {
    date: "April 20, 2024",
    message: "Class scheduled for tomorrow at 10:00 AM.",
  },
  {
    date: "April 25, 2024",
    message: "Vehicle availability for practice sessions is limited this week.",
  },
];

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState("details");

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Function to handle updating password
  const handleUpdatePassword = () => {
    // Placeholder for password update logic
    console.log("Updating password...");
  };

  // Function to handle making payment
  const handleMakePayment = () => {
    // Placeholder for payment logic
    console.log("Making payment...");
  };

  return (
    <>
      <Breadcrumb
        pageName="Profile"
        description="Check all your details and update Information."
      />

      <section
        id="contact"
        className="md:py-15 py-15 lg:py-15 overflow-hidden bg-hero-pattern bg-cover"
      >
        <div className="container  max-w-full bg-dark bg-opacity-40 py-28 backdrop-blur-sm">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 ">
              <div className="flex items-center justify-center">
                <div className="w-3/4 rounded-lg bg-gray-100 p-8">
                  <div className="flex">
                    {/* Sidebar */}
                    <div className=" mr-4 w-1/4 rounded bg-beige">
                      <div className="p-4">
                        {/* User details */}

                        {/* Tabs */}
                        <div>
                          <ul>
                            <li
                              onClick={() => handleTabChange("details")}
                              className={`mb-2 cursor-pointer ${
                                activeTab === "details"
                                  ? "font-semibold text-blue-500"
                                  : "text-gray-600"
                              }`}
                            >
                              User Details
                            </li>
                            <li
                              onClick={() => handleTabChange("password")}
                              className={`mb-2 cursor-pointer ${
                                activeTab === "password"
                                  ? "font-semibold text-blue-500"
                                  : "text-gray-600"
                              }`}
                            >
                              Change Password
                            </li>
                            <li
                              onClick={() => handleTabChange("course")}
                              className={`mb-2 cursor-pointer ${
                                activeTab === "course"
                                  ? "font-semibold text-blue-500"
                                  : "text-gray-600"
                              }`}
                            >
                              Current Course
                            </li>
                            <li
                              onClick={() => handleTabChange("progress")}
                              className={`mb-2 cursor-pointer ${
                                activeTab === "progress"
                                  ? "font-semibold text-blue-500"
                                  : "text-gray-600"
                              }`}
                            >
                              Progress Reports
                            </li>
                            <li
                              onClick={() => handleTabChange("notifications")}
                              className={`mb-2 cursor-pointer ${
                                activeTab === "notifications"
                                  ? "font-semibold text-blue-500"
                                  : "text-gray-600"
                              }`}
                            >
                              Notifications
                            </li>
                            <li
                              onClick={() => handleTabChange("payment")}
                              className={`mb-2 cursor-pointer ${
                                activeTab === "payment"
                                  ? "font-semibold text-blue-500"
                                  : "text-gray-600"
                              }`}
                            >
                              Make Payment
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Main Content */}
                    <div className="w-3/4">
                      <div className="mb-5 overflow-hidden rounded-lg bg-beige shadow-lg">
                        <div className=" px-4 py-2">
                          <div className="mb-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <img
                                className="mr-4 h-12 w-12 rounded-full object-cover"
                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                alt="Profile Picture"
                              />
                              <div>
                                <h2 className="text-lg font-semibold text-gray-800">
                                  {userDetails.name}
                                </h2>
                                <p className="text-sm text-gray-600">Student</p>
                              </div>
                            </div>
                            <button className="rounded-full bg-blue-500 py-2 px-4 font-semibold text-black hover:bg-blue-600">
                              Edit Profile
                            </button>
                          </div>
                          <hr className="my-2" />
                        </div>
                      </div>
                      {/* User Details Tab */}
                      {activeTab === "details" && (
                        <div className="overflow-hidden rounded-lg bg-beige shadow-lg">
                          <div className="px-4 py-6">
                            <div>
                              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                                Personal Information
                              </h3>
                              <p className="text-sm text-gray-600">
                                <span className="font-semibold">Email:</span>{" "}
                                {userDetails.email}
                              </p>
                              <p className="text-sm text-gray-600">
                                <span className="font-semibold">Phone: </span>
                                {userDetails.phone}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Change Password Tab */}
                      {activeTab === "password" && (
                        <div className="mb-8 rounded-lg bg-beige p-4 shadow-md">
                          <h2 className="mb-4 text-lg font-semibold">
                            Change Password
                          </h2>
                          <form onSubmit={handleUpdatePassword}>
                            <div className="mb-4">
                              <label
                                htmlFor="currentPassword"
                                className="mb-2 block text-sm font-medium"
                              >
                                Current Password
                              </label>
                              <input
                                type="password"
                                id="currentPassword"
                                name="currentPassword"
                                className=" w-full rounded-sm border px-4 py-1"
                              />
                            </div>
                            <div className="mb-4">
                              <label
                                htmlFor="newPassword"
                                className="mb-2 block text-sm font-medium"
                              >
                                New Password
                              </label>
                              <input
                                type="password"
                                id="newPassword"
                                name="newPassword"
                                className="w-full rounded-sm border px-4 py-1"
                              />
                            </div>
                            <div className="mb-4">
                              <label
                                htmlFor="confirmPassword"
                                className="mb-2 block text-sm font-medium"
                              >
                                Confirm New Password
                              </label>
                              <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="w-full rounded-sm border px-4 py-1"
                              />
                            </div>
                            <button
                              type="submit"
                              className="rounded-sm bg-primary py-2 px-4 font-semibold text-white hover:bg-opacity-90"
                            >
                              Change Password
                            </button>
                          </form>
                        </div>
                      )}
                      {/* Current Course Tab */}
                      {activeTab === "course" && (
                        <div className="mb-8 rounded-lg bg-beige p-6 shadow-md">
                          <h2 className="mb-4 text-lg font-semibold">
                            Current Course
                          </h2>
                          <p>Course Name: {currentCourse.name}</p>
                          <p>Start Date: {currentCourse.startDate}</p>
                          <p>Duration: {currentCourse.duration}</p>
                        </div>
                      )}
                      {/* Progress Reports Tab */}
                      {activeTab === "progress" && (
                        <div className="mb-8 rounded-lg bg-beige p-6 shadow-md">
                          <h2 className="mb-4 text-lg font-semibold">
                            Progress Reports
                          </h2>
                          <ul>
                            {progressReports.map((report, index) => (
                              <li key={index}>
                                <p>Date: {report.date}</p>
                                <p>Report: {report.report}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {/* Notifications Tab */}
                      {activeTab === "notifications" && (
                        <div className="mb-8 rounded-lg bg-beige p-6 shadow-md">
                          <h2 className="mb-4 text-lg font-semibold">
                            Notifications
                          </h2>
                          <ul>
                            {notifications.map((notification, index) => (
                              <li key={index}>
                                <p>Date: {notification.date}</p>
                                <p>Message: {notification.message}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {/* Make Payment Tab */}
                      {activeTab === "payment" && (
                        <div className="mb-8 rounded-lg bg-beige p-6 shadow-md">
                          <h2 className="mb-4 text-lg font-semibold">
                            Make Payment
                          </h2>
                          <form onSubmit={handleMakePayment}>
                            <div className="mb-4">
                              <label
                                htmlFor="paymentType"
                                className="mb-2 block text-sm font-medium"
                              >
                                Payment Type
                              </label>
                              <select
                                id="paymentType"
                                name="paymentType"
                                className="w-full rounded-sm border px-4 py-1"
                              >
                                <option value="course">Course Fee</option>
                                <option value="traffic">
                                  Road Traffic Committee Fee
                                </option>
                              </select>
                            </div>
                            <div className="mb-4">
                              <label
                                htmlFor="cardNumber"
                                className="mb-2 block text-sm font-medium"
                              >
                                Card Number
                              </label>
                              <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                className="w-full rounded-sm border px-4 py-1"
                              />
                            </div>
                            <div className="mb-4">
                              <label
                                htmlFor="expiryDate"
                                className="mb-2 block text-sm font-medium"
                              >
                                Expiry Date
                              </label>
                              <input
                                type="text"
                                id="expiryDate"
                                name="expiryDate"
                                className="w-full rounded-sm border px-4 py-1"
                              />
                            </div>
                            <div className="mb-4">
                              <label
                                htmlFor="cvv"
                                className="mb-2 block text-sm font-medium"
                              >
                                CVV
                              </label>
                              <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                className="w-full rounded-sm border px-4 py-1"
                              />
                            </div>
                            <button
                              type="submit"
                              className="rounded-sm bg-primary py-2 px-4 font-semibold text-white hover:bg-opacity-90"
                            >
                              Make Payment
                            </button>
                          </form>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfilePage;
