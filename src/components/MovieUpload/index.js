import {
  Box,
  Chip,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import CategoryInput from "./Category";
import TextInput from "./TextInput";
import DateInput from "./DateInput";
import SelectInput from "./Select";

export const FormContainer = styled.div``;
export const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 12px;
`;

const UploadForm = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const handleCategoryChange = (categories) => {
    console.log("Selected Categories:", categories);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <FormContainer>
        <Paper
          elevation={1}
          sx={{
            position: "relative",
            padding: 8,
            margin: "auto",
            maxWidth: "800px",
            marginTop: 16,
            borderRadius: 3,
          }}
        >
          <Chip
            sx={{ position: "absolute", top: 0, left: 0, fontSize: "16px" }}
            icon={<ArrowBackIcon />}
            label="Back To Main"
            clickable
            onClick={handleClick}
          >
            Back to main
          </Chip>
          <Box component="form">
            <FormLayout>
              <Typography textAlign={"center"} variant="h3">
                Book Uploader
              </Typography>
              <div style={{ display: "flex", width: "100%", gap: "12px" }}>
                <TextInput name="Title" required={true}></TextInput>
                <TextInput name="Author" required={true}></TextInput>
              </div>
              <CategoryInput onChange={handleCategoryChange}></CategoryInput>
              <DateInput name="Date"></DateInput>
              <TextInput name="Description"></TextInput>
              <SelectInput name="Membership Type"></SelectInput>
            </FormLayout>
          </Box>
        </Paper>
      </FormContainer>
    </ThemeProvider>
  );
};

export default UploadForm;
