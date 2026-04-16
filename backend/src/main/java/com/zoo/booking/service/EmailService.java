package com.zoo.booking.service;

import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class EmailService {
    private static final Logger logger = LoggerFactory.getLogger(EmailService.class);

    public void sendResetPasswordEmail(String email, String token) {
        String resetUrl = "http://localhost:3001/reset-password/" + token;
        
        logger.info("================================================");
        logger.info("PASSWORD RESET REQUEST FOR: {}", email);
        logger.info("Click the link below to reset your password:");
        logger.info(resetUrl);
        logger.info("This link will expire in 1 hour.");
        logger.info("================================================");
        
        // In a real application, you would use JavaMailSender to send an actual email:
        /*
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Password Reset Request");
        message.setText("To reset your password, click the link below:\n" + resetUrl);
        mailSender.send(message);
        */
    }
}
