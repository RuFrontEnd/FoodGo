import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import MyFavSect, { getMyFav } from 'components/myFavSect/MyFavSect';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import axios from 'axios';


