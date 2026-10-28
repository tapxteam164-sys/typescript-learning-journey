enum PaymentStatus {
    pending = "PENDING",
    successful = "SUCCESSFUL",
    failed = "FAILED"
}

console.log(PaymentStatus.pending)
function getPaymentMessage (status: PaymentStatus): string | undefined{
    if(status === PaymentStatus.pending){
        return "Payment is waiting."
    }else if (status === PaymentStatus.successful){
        return "Payment completed successfully!"
    }else{
        return "Payment failed. Please try again."
    }
}

console.log(getPaymentMessage(PaymentStatus.pending));
console.log(getPaymentMessage(PaymentStatus.successful));
console.log(getPaymentMessage(PaymentStatus.failed));