const functions = require("firebase-functions");
const express = require("express");
const { queries } = require("@testing-library/react");
const cors = requries("core");
const stripe = require("stripe")("sk_test_WIPLVI7Y0Qxu0zKi4YclU6tX0042P9Lzco");
