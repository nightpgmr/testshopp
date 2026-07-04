<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;

class VerifyEmailNotification extends VerifyEmail
{
    public function toMail($notifiable): MailMessage
    {
        $verificationUrl = $this->verificationUrl($notifiable);

        return (new MailMessage)
            ->subject('تأیید ایمیل — TestShopp')
            ->greeting('سلام '.$notifiable->name.'!')
            ->line('لطفاً برای تأیید ایمیل خود روی دکمه زیر کلیک کنید.')
            ->action('تأیید ایمیل', $verificationUrl)
            ->line('اگر حساب کاربری نساخته‌اید، نیازی به اقدام نیست.');
    }
}
