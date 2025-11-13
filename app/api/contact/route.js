import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, organization, message } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the contact form submission (in production, send to email service or database)
    console.log('Contact Form Submission:', {
      fullName,
      email,
      organization: organization || 'Not provided',
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received. Our team will contact you within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
