import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SplashScreen } from "../screens/SplashScreen";
import { OnboardingScreen } from "../screens/OnboardingScreen";
import { UserTypeSelectionScreen } from "../screens/UserTypeSelectionScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { ResetPasswordScreen } from "../screens/ResetPasswordScreen";
import { PhoneVerificationScreen } from "../screens/PhoneVerificationScreen";
import { CreateNewPasswordScreen } from "../screens/CreateNewPasswordScreen";
import { DonorRegistrationStep1 } from "../screens/DonorRegistrationStep1";
import { DonorRegistrationStep2 } from "../screens/DonorRegistrationStep2";
import { DonorRegistrationStep3 } from "../screens/DonorRegistrationStep3";
import { DonorRegistrationStep4 } from "../screens/DonorRegistrationStep4";
import { DonorRegistrationComplete } from "../screens/DonorRegistrationComplete";

type AuthScreen =
  | "splash"
  | "onboarding"
  | "userType"
  | "signup"
  | "login"
  | "resetPassword"
  | "verification"
  | "createPassword"
  | "donorReg1"
  | "donorReg2"
  | "donorReg3"
  | "donorReg4"
  | "donorRegComplete";

export default function AuthNavigation() {
  const [currentScreen, setCurrentScreen] = useState<AuthScreen>("splash");

  return (
    <>
      {currentScreen === "splash" && (
        <>
          <SplashScreen onFinish={() => setCurrentScreen("onboarding")} />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "onboarding" && (
        <>
          <OnboardingScreen onComplete={() => setCurrentScreen("userType")} />
          <StatusBar style="light" />
        </>
      )}

      {currentScreen === "userType" && (
        <>
          <UserTypeSelectionScreen
            onSelectType={(type) => {
              if (type === "donor") {
                setCurrentScreen("donorReg1");
              } else {
                setCurrentScreen("signup");
              }
            }}
          />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "signup" && (
        <>
          <SignUpScreen
            onSignUp={() => {
              // Handle signup success - this should update Redux state
              // which will automatically switch to main app
            }}
            onNavigateToLogin={() => setCurrentScreen("login")}
            onBack={() => setCurrentScreen("userType")}
          />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "login" && (
        <>
          <LoginScreen
            onLogin={() => {
              // Handle login success - this should update Redux state
              // which will automatically switch to main app
            }}
            onNavigateToSignUp={() => setCurrentScreen("signup")}
            onForgotPassword={() => setCurrentScreen("resetPassword")}
            onBack={() => setCurrentScreen("userType")}
          />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "resetPassword" && (
        <>
          <ResetPasswordScreen
            onSubmit={() => setCurrentScreen("verification")}
            onBack={() => setCurrentScreen("login")}
          />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "verification" && (
        <>
          <PhoneVerificationScreen
            onVerify={() => setCurrentScreen("createPassword")}
            onBack={() => setCurrentScreen("resetPassword")}
          />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "createPassword" && (
        <>
          <CreateNewPasswordScreen
            onComplete={() => setCurrentScreen("login")}
            onBack={() => setCurrentScreen("verification")}
          />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "donorReg1" && (
        <>
          <DonorRegistrationStep1
            onNext={() => setCurrentScreen("donorReg2")}
            onBack={() => setCurrentScreen("userType")}
          />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "donorReg2" && (
        <>
          <DonorRegistrationStep2
            onNext={() => setCurrentScreen("donorReg3")}
            onBack={() => setCurrentScreen("donorReg1")}
          />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "donorReg3" && (
        <>
          <DonorRegistrationStep3
            onNext={() => setCurrentScreen("donorReg4")}
            onBack={() => setCurrentScreen("donorReg2")}
          />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "donorReg4" && (
        <>
          <DonorRegistrationStep4
            onFinish={() => setCurrentScreen("donorRegComplete")}
            onBack={() => setCurrentScreen("donorReg3")}
          />
          <StatusBar style="dark" />
        </>
      )}

      {currentScreen === "donorRegComplete" && (
        <>
          <DonorRegistrationComplete
            onDone={() => {
              // Handle registration completion - this should update Redux state
              // which will automatically switch to main app
            }}
          />
          <StatusBar style="dark" />
        </>
      )}
    </>
  );
}
