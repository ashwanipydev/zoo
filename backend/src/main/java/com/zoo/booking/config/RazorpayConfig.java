package com.zoo.booking.config;

import com.razorpay.RazorpayClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RazorpayConfig {

	private static final String RAZORPAY_KEY_ID = "rzp_live_QX8BXvhImSEQL9";
    private static final String RAZORPAY_KEY_SECRET = "el24erdmUWFxb1Mz7U3vGgV1";

    @Bean
    RazorpayClient razorpayClient() throws Exception {
        return new RazorpayClient(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET);
    }
}
