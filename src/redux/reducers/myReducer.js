import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 data: [
  {"EmpID": 'BM2011',
  'EmpName':'David Paul',
  'CompName':'Stark Industries - Trade',
  'Designation':'Lead',
  'Date':'21 Jan 2023',
  'Location':'59,Walwyn Rd,Chatto,TD DQT,United Kingdom'
},
{"EmpID": 'BM20123',
  'EmpName':'Rober Paul',
  'CompName':'Stark Industries - Operations',
  'Designation':'Worker',
  'Date':'17 Jan 2023',
  'Location':'5,TD DQT,United Kingdom'
},{"EmpID": 'AD2011',
'EmpName':'David Paul',
'CompName':'Valley - Trade',
'Designation':'Operation Specialist',
'Date':'11 Jan 2023',
'Location':'29,Chatto,TD DQT,United Kingdom'
}
 ]
};

const mySlice = createSlice({
  name: 'myReducer',
  initialState,
  reducers: {
    
  },
});

export const { actions: myActions } = mySlice;
export const myReducer = mySlice.reducer;
