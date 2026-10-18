package com.villofarm.repository;

import com.villofarm.model.CustomerOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface OrderRepository extends JpaRepository<CustomerOrder, Long> {
    List<CustomerOrder> findByCustomerEmailOrderByCreatedAtDesc(String email);

    List<CustomerOrder> findAllByOrderByCreatedAtDesc();
}
