import React from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EnquiryModal = ({ open, onClose, mobileNumber, emailAddress }) => {
  const navigate = useNavigate();
  const message = encodeURIComponent("Hi, I am interested in your project!");
  const whatsappUrl = mobileNumber
    ? `https://wa.me/${mobileNumber}?text=${message}`
    : null;
  const emailSubject = encodeURIComponent("Project Inquiry");
  const emailBody = encodeURIComponent("Hi, I am interested in your project!");
  const mailUrl = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyles}>
        <Typography variant="h6" sx={{ mb: 2, color: "#ffffff" }}>
          Contact Us
        </Typography>

        {mobileNumber ? (
          <>
            <Typography sx={{ mb: 3, color: "#b8b8b8" }}>
              Choose your preferred mode of communication:
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {/* WhatsApp Button */}
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#25D366",
                  color: "#fff",
                  "&:hover": { bgcolor: "#1E9E50" },
                }}
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                WhatsApp
              </Button>

              {/* Email Button */}
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#F47521", // Crunchyroll Orange
                  color: "#fff",
                  "&:hover": { bgcolor: "#d45f1c" },
                }}
                onClick={() => (window.location.href = mailUrl)}
              >
                Email
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Typography sx={{ mb: 3, color: "#F47521", fontWeight: "bold" }}>
              No mobile number found! Contact via email or update your number.
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              {/* Email Button (Encouraged as primary option) */}
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#F47521",
                  color: "#fff",
                  "&:hover": { bgcolor: "#d45f1c" },
                }}
                onClick={() => (window.location.href = mailUrl)}
              >
                Email
              </Button>

              {/* Update Mobile Button */}
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#ffffff",
                  color: "#F47521",
                  "&:hover": { bgcolor: "#e0e0e0" },
                }}
                onClick={() => navigate("/settings")}
              >
                Update Mobile
              </Button>
            </Box>
          </>
        )}

        <Button sx={{ mt: 2, color: "#ffffff" }} onClick={onClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

const modalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#181818", // Crunchyroll Dark Theme
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
  color: "#ffffff",
  textAlign: "center",
};

export default EnquiryModal;
