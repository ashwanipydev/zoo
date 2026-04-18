package com.zoo.booking.repository;

import com.zoo.booking.entity.SlotPricing;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class SlotPricingRepository {
    private static final RowMapper<SlotPricing> SLOT_PRICING_ROW_MAPPER =
            (rs, rowNum) -> {
                SlotPricing pricing = new SlotPricing();
                pricing.setId(rs.getLong("id"));
                pricing.setSlotId(rs.getLong("slot_id"));
                pricing.setTicketType(rs.getString("ticket_type"));
                pricing.setPrice(rs.getDouble("price"));
                pricing.setIsActive(rs.getBoolean("is_active"));
                return pricing;
            };

    private final JdbcTemplate jdbcTemplate;

    public SlotPricingRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Optional<SlotPricing> findBySlotIdAndTicketType(Long slotId, String ticketType) {
        List<SlotPricing> prices = jdbcTemplate.query(
                "SELECT id, slot_id, ticket_type, price, is_active FROM slot_pricing WHERE slot_id = ? AND ticket_type = ?",
                SLOT_PRICING_ROW_MAPPER,
                slotId,
                ticketType
        );
        return prices.stream().findFirst();
    }

    public List<SlotPricing> findBySlotId(Long slotId) {
        return jdbcTemplate.query(
                "SELECT id, slot_id, ticket_type, price, is_active FROM slot_pricing WHERE slot_id = ? ORDER BY ticket_type",
                SLOT_PRICING_ROW_MAPPER,
                slotId
        );
    }
}

